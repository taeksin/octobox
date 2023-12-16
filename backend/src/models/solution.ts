import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export type SolutionAttributes = {
  solutionNo: number;
  authorNo: number;
  questionNo: number;
  title: string;
  content: string;
  totalVote: number;
  answerCount: number;
  language: string;
  url: string;
};

export type SoultionCreationAttributes = Optional<
SolutionAttributes,
  'solutionNo' | 'totalVote' | 'answerCount'
>;

class Solution extends Model<SolutionAttributes, SoultionCreationAttributes> {
  declare readonly solutionNo: number;

  declare authorNo: number;

  declare questionNo: number;

  declare title: string;

  declare content: string;

  declare totalVote: number;

  declare answerCount: number;

  declare language: string;

  declare url: string;

  declare readonly createdAt: Date;

  declare readonly updatedAt: Date;

  declare account: any;
}

Solution.init(
  {
    solutionNo: {
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
    questionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(255),
    },
    url: {
      type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    modelName: 'Solution',
    tableName: 'solutions',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export const associate = (db: dbType) => {};

export default Solution;
