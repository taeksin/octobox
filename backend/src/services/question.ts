import Question from '../models/question';

class QuestionService {
  async createQuestion(questionInfo: any) {
    return Question.create(questionInfo);
  }

  async getQuestionByQuestionNo(questionNo: number) {
    return Question.findByPk(questionNo);
  }

  async getQuestions(query:any, pageNum:number, nQuestions:number, sort:any) {
    sort = sort || [["questionNo", "DESC"]];
    const offset = this.getPaginationOffset(nQuestions, pageNum);

    return Question.findAndCountAll({
      where: query,
      order: sort,
      offset: +offset,
      limit: +nQuestions,
      //raw: true,
      //nest: true,
    });
  }

  async increaseAnswerCount(questionNo: number) {
    Question.increment({
      answerCount: 1
    }, {
      where: {
        questionNo
      }
    })
  }

  getPaginationOffset(nQuestions: number, pageNum: number) {
    let offset = 0;

    if (pageNum > 1) {
      offset = nQuestions * (pageNum - 1);
    }

    return offset;
  }

  
}

export default new QuestionService();
