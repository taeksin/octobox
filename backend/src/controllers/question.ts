import { Request, Response, NextFunction } from 'express';
import AsyncHandled from 'express-safe-async';
import QuestionService from '../services/question';
import UserService from '../services/user';
import CustomError from '../custom_error';
import SequelizeQueryBuilder from '../utils/query_builder';

import Controller from './controller';
import Question from '../models/question';

class QuestionController extends Controller {
  
  @AsyncHandled
  public async postCreateQuestion(req: Request, res: Response) {
    const questionInfo: any = req.body;
    questionInfo.content = `[${questionInfo.source} ${questionInfo.sourceNo}] ${questionInfo.title}`;
    questionInfo.authorNo = req.user?.userNo;

    const question = await QuestionService.createQuestion(questionInfo);
    res.json(question);
  }


  public async appendAccount(question: Question): Promise<Question> {
    const user = await UserService.getUserByUserNo(question.authorNo);
    question.account = {
        id: user?.userNo,
        email: user?.email,
        profile: null,
        nickname: user?.username
    }

    return question;
  }

  @AsyncHandled
  public async getQuestions(req: Request, res: Response) {
    const nQuestions = req.query.size as any || 10;
    const pageNum = req.query.page as any || 1;

    const validKeyword = ['questionNo', 'title', 'content', 'totalVote', 'answerCount'];
    const query = SequelizeQueryBuilder.buildFilterQuery(validKeyword, req.query as any);
    const sort = SequelizeQueryBuilder.buildSortQuery(req.query.sort as string);

    const questions = await QuestionService.getQuestions(query, pageNum, nQuestions, sort);
    //questions.rows = Object.assign({}, questions.rows)
    const tasks = questions.rows.map((question: any) => {
        question = Object.assign({}, question.get())
        return this.appendAccount(question);
    })

    questions.rows = await Promise.all(tasks);

    console.log(questions.rows)
    
    const response = {
        content: questions.rows,
        totalElements: questions.count,
        totalPages: Math.ceil(questions.count/nQuestions),
        first: pageNum == 1,
        last: pageNum == Math.ceil(questions.count/nQuestions),
        size: nQuestions,
        pageNumber: pageNum,
        numberOfElements: questions.rows.length,
        sorted: true
    }
    
    res.json(response);
  }
}

export default new QuestionController();
