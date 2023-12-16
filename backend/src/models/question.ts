import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export type QuestionAttributes = {
  questionNo: number;
  authorNo: number;
  title: string;
  content: string;
  totalVote: number;
  answerCount: number;
  source: string;
  sourceNo: number;
};

export type QuestionCreationAttributes = Optional<
  QuestionAttributes,
  'questionNo' | 'totalVote' | 'answerCount'
>;

class Question extends Model<QuestionAttributes, QuestionCreationAttributes> {
  declare readonly questionNo: number;

  declare authorNo: number;

  declare title: string;

  declare content: string;

  declare totalVote: number;

  declare answerCount: number;

  declare source: string;

  declare sourceNo: number;

  declare readonly createdAt: Date;

  declare readonly updatedAt: Date;

  declare account: any;
}

Question.init(
  {
    questionNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    totalVote: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    answerCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    authorNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING(255)
    },
    sourceNo: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export const associate = (db: dbType) => {};

export default Question;
