import Solution from '../models/solution';

class SolutionService {
  async createSolution(solutionInfo: any) {
    return Solution.create(solutionInfo);
  }

  async getSolutionBySolutionNo(solutionNo: number) {
    return Solution.findByPk(solutionNo);
  }

  async getSolutions(query:any, pageNum:number, nSolutions:number, sort:any) {
    sort = sort || [["solutionNo", "DESC"]];
    const offset = this.getPaginationOffset(nSolutions, pageNum);

    return Solution.findAndCountAll({
      where: query,
      order: sort,
      offset: +offset,
      limit: +nSolutions,
      //raw: true,
      //nest: true,
    });
  }

  async increaseCommentCount(solutionNo: number) {
    Solution.increment({
      answerCount: 1
    }, {
      where: {
        solutionNo
      }
    })
  }

  async upVote(solutionNo: number) {
    Solution.increment({
      totalVote: 1
    }, {
      where: {
        solutionNo
      }
    })
  }

  async downVote(solutionNo: number) {
    Solution.decrement({
      totalVote: 1
    }, {
      where: {
        solutionNo
      }
    })
  }

  getPaginationOffset(nSolutions: number, pageNum: number) {
    let offset = 0;

    if (pageNum > 1) {
      offset = nSolutions * (pageNum - 1);
    }

    return offset;
  }
}

export default new SolutionService();
