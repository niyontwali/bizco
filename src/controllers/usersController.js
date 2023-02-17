import { users } from "../constants/dummy";

class usersController {
  static async getUsers(req, res) {
    res.status(200).json({
      success: true,
      data: users
    });
  }
}

export default usersController