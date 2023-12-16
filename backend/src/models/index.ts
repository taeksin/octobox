import User, { associate as associateUser } from './user';
import Question, { associate as associateQuestion } from './question';
import Solution, { associate as associateSolution } from './solution';
import Comment, { associate as associateComment } from './comment';

export * from './sequelize';

const db = {
  User,
  Question,
  Solution,
  Comment
};

export type dbType = typeof db;

associateUser(db);
associateQuestion(db);
associateSolution(db);
associateComment(db);