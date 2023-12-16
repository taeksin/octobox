import { Router, Response, Request } from 'express';

import SolutionController from '../controllers/solution';

class SolutionRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/v1/solutions/:solutionNo', SolutionController.getSolution);

    this.router.get('/v1/questions/:questionNo/solutions', SolutionController.getSolutions);

    this.router.post('/v1/questions/:questionNo/solutions', SolutionController.postCreateSolution);

    this.router.get('/v1/solutions/:solutionNo/upVote', SolutionController.upVote);

    this.router.get('/v1/solutions/:solutionNo/downVote', SolutionController.downVote);
  }
}

export default new SolutionRouter().router;
