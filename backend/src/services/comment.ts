import Comment from '../models/comment';

class CommentService {
  async createComment(commentInfo: any) {
    return Comment.create(commentInfo);
  }

  async getCommentByCommentNo(commentNo: number) {
    return Comment.findByPk(commentNo);
  }

  async getComments(query:any, pageNum:number, nComments:number, sort:any) {
    sort = sort || [["commentNo", "DESC"]];
    const offset = this.getPaginationOffset(nComments, pageNum);

    return Comment.findAndCountAll({
      where: query,
      order: sort,
      offset: +offset,
      limit: +nComments,
      //raw: true,
      //nest: true,
    });
  }

  getPaginationOffset(nComments: number, pageNum: number) {
    let offset = 0;

    if (pageNum > 1) {
      offset = nComments * (pageNum - 1);
    }

    return offset;
  }
}

export default new CommentService();
