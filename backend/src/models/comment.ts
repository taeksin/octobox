import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export type CommentAttributes = {
  commentNo: number;
  authorNo: number;
  solutionNo: number;
  content: string;
  totalVote: number;
  selected: boolean;
};

export type CommentCreationAttributes = Optional<
CommentAttributes,
  'commentNo' | 'totalVote' | 'selected'
>;

class Comment extends Model<CommentAttributes, CommentCreationAttributes> {
  declare readonly commentNo: number;

  declare authorNo: number;

  declare solutionNo: number;

  declare content: string;

  declare totalVote: number;

  declare selected: boolean;

  declare readonly createdAt: Date;

  declare readonly updatedAt: Date;

  declare account: any;
}

Comment.init(
  {
    commentNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    totalVote: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    authorNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    solutionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    selected: {
        type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export const associate = (db: dbType) => {};

export default Comment;
