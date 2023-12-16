import { Router, Response, Request } from 'express';

import QuestionController from '../controllers/question';

class QuestionRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/v1/questions', QuestionController.getQuestions);

    this.router.post('/v1/questions', QuestionController.postCreateQuestion);
  }
}

export default new QuestionRouter().router;
