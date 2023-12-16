import { Router, Response, Request } from 'express';

import CommentController from '../controllers/comment';

class CommentRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/v1/comments/:commentNo', CommentController.getComment);

    this.router.get('/v1/solutions/:solutionNo/comments', CommentController.getComments);

    this.router.post('/v1/solutions/:solutionNo/comments', CommentController.postCreateComment);
  }
}

export default new CommentRouter().router;
