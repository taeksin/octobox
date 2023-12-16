import { Request, Response, NextFunction } from 'express';
import AsyncHandled from 'express-safe-async';
import CommentService from '../services/comment';
import SolutionService from '../services/solution';
import UserService from '../services/user';
import CustomError from '../custom_error';
import SequelizeQueryBuilder from '../utils/query_builder';

import Controller from './controller';
import Comment from '../models/comment';

class CommentController extends Controller {
  
  @AsyncHandled
  public async postCreateComment(req: Request, res: Response) {
    const commentInfo: any = req.body;
    commentInfo.authorNo = req.user?.userNo;
    commentInfo.solutionNo = req.params.solutionNo;

    const comment = await CommentService.createComment(commentInfo);
    await SolutionService.increaseCommentCount(commentInfo.solutionNo);
    res.json(comment);
  }


  public async appendAccount(comment: Comment): Promise<Comment> {
    const user = await UserService.getUserByUserNo(comment.authorNo);

    comment.account = {
        id: user?.userNo,
        email: user?.email,
        profile: null,
        nickname: user?.username
    }

    
    return comment;
  }

  @AsyncHandled
  public async getComment(req: Request, res: Response) {
    const commentNo = req.params.commentNo as any;

    let comment = await CommentService.getCommentByCommentNo(commentNo) as any;

    if(!comment) {
      throw new CustomError(404, 'Not Found', 'Not Found');
    }

    
    const user = await UserService.getUserByUserNo(comment.authorNo);
    comment = Object.assign({}, comment.get())
    comment.account = {
        id: user?.userNo,
        email: user?.email,
        profile: null,
        nickname: user?.username
    }

    res.json(comment)
  }

  @AsyncHandled
  public async getComments(req: Request, res: Response) {
    const solutionNo = req.params.solutionNo;
    req.query.solutionNo = solutionNo;
    
    const nComments = req.query.size as any || 10;
    const pageNum = req.query.page as any || 1;

    const validKeyword = ['commentNo', 'solutionNo', 'title', 'content', 'totalVote', 'answerCount'];
    
    const query = SequelizeQueryBuilder.buildFilterQuery(validKeyword, req.query as any);
    const sort = SequelizeQueryBuilder.buildSortQuery(req.query.sort as string);

    const comments = await CommentService.getComments(query, pageNum, nComments, sort);

    const tasks = comments.rows.map((comment: any) => {
        comment = Object.assign({}, comment.get())
        return this.appendAccount(comment);
    })

    comments.rows = await Promise.all(tasks);
    console.log(comments.rows)
    
    const response = {
        content: comments.rows,
        totalElements: comments.count,
        totalPages: Math.ceil(comments.count/nComments),
        first: pageNum == 1,
        last: pageNum == Math.ceil(comments.count/nComments),
        size: nComments,
        pageNumber: pageNum,
        numberOfElements: comments.rows.length,
        sorted: true
    }
    res.json(response);
  }
}

export default new CommentController();
