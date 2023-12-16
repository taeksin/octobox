import User, { UserCreationAttributes } from '../models/user';

class UserService {
  async createUser(userInfo: UserCreationAttributes) {
    console.log(userInfo);
    return User.create(userInfo);
  }

  async getUserByUserNo(userNo: number) {
    return User.findByPk(userNo);
  }

  async getUserByUsername(username: string) {
    return User.findOne({
      where: {
        username,
      },
    });
  }

  async getUserByEmail(email: string) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  async upVote(userNo: number) {
    User.increment({
      totalVote: 1
    }, {
      where: {
        userNo
      }
    })
  }

  async downVote(userNo: number) {
    User.decrement({
      totalVote: 1
    }, {
      where: {
        userNo
      }
    })
  }
}

export default new UserService();
