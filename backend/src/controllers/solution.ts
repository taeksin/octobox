import { Request, Response, NextFunction } from 'express';
import AsyncHandled from 'express-safe-async';
import SolutionService from '../services/solution';
import QuestionService from '../services/question';
import UserService from '../services/user';
import CustomError from '../custom_error';
import SequelizeQueryBuilder from '../utils/query_builder';

import Controller from './controller';
import Solution from '../models/solution';

class SolutionController extends Controller {
  
  @AsyncHandled
  public async postCreateSolution(req: Request, res: Response) {
    const solutionInfo: any = req.body;
    solutionInfo.authorNo = req.user?.userNo;
    solutionInfo.questionNo = req.params.questionNo;

    const solution = await SolutionService.createSolution(solutionInfo);
    await QuestionService.increaseAnswerCount(solutionInfo.questionNo);
    res.json(solution);
  }


  public async appendAccount(solution: Solution): Promise<Solution> {
    const user = await UserService.getUserByUserNo(solution.authorNo);
    solution.account = {
        id: user?.userNo,
        email: user?.email,
        profile: null,
        nickname: user?.username
    }

    return solution;
  }

  @AsyncHandled
  public async getSolution(req: Request, res: Response) {
    const solutionNo = req.params.solutionNo as any;

    let solution = await SolutionService.getSolutionBySolutionNo(solutionNo) as any;

    if(!solution) {
      throw new CustomError(404, 'Not Found', 'Not Found');
    }

    
    const user = await UserService.getUserByUserNo(solution.authorNo);
    solution = Object.assign({}, solution.get())
    solution.account = {
        id: user?.userNo,
        email: user?.email,
        profile: null,
        nickname: user?.username
    }

    res.json(solution)
  }

  @AsyncHandled
  public async getSolutions(req: Request, res: Response) {
    const questionNo = req.params.questionNo;
    req.query.questionNo = questionNo;
    
    const nSolutions = req.query.size as any || 10;
    const pageNum = req.query.page as any || 1;

    const validKeyword = ['solutionNo', 'questionNo', 'title', 'content', 'totalVote', 'answerCount', 'language'];
    
    const query = SequelizeQueryBuilder.buildFilterQuery(validKeyword, req.query as any);
    const sort = SequelizeQueryBuilder.buildSortQuery(req.query.sort as string);

    const solutions = await SolutionService.getSolutions(query, pageNum, nSolutions, sort);

    const tasks = solutions.rows.map((solution: any) => {
        solution = Object.assign({}, solution.get())
        return this.appendAccount(solution);
    })

    solutions.rows = await Promise.all(tasks);
    console.log(solutions.rows)
    
    const response = {
        content: solutions.rows,
        totalElements: solutions.count,
        totalPages: Math.ceil(solutions.count/nSolutions),
        first: pageNum == 1,
        last: pageNum == Math.ceil(solutions.count/nSolutions),
        size: nSolutions,
        pageNumber: pageNum,
        numberOfElements: solutions.rows.length,
        sorted: true
    }
    res.json(response);
  }

  @AsyncHandled
  public async upVote(req: Request, res:Response) {
    const solutionNo = req.params.solutionNo as any;
    const solution = await SolutionService.getSolutionBySolutionNo(solutionNo);

    if(!solution) {
      throw new CustomError(404, 'Solution Not Found', 'Not Found');
    }

    await SolutionService.upVote(solutionNo);
    await UserService.upVote(solution.authorNo);

    res.json(true);
  }

  @AsyncHandled
  public async downVote(req: Request, res:Response) {
    const solutionNo = req.params.solutionNo as any;
    const solution = await SolutionService.getSolutionBySolutionNo(solutionNo);

    if(!solution) {
      throw new CustomError(404, 'Solution Not Found', 'Not Found');
    }

    await SolutionService.downVote(solutionNo);
    await UserService.downVote(solution.authorNo);

    res.json(true);
  }
}

export default new SolutionController();
