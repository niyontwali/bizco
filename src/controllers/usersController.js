import db from "../../database/config";

class usersController {
  // create users
  static async createUser(req, res) {
    try {
      const { firstname, lastname, email, password } = req.body;
      await db("users")
        .insert({ firstname, lastname, email, password });
      res.status(201).json({
        success: true,
        message: "User successfully created"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Get all users
  static async getUsers(req, res) {
    const users = await db("users");
    res.status(200).json({
      success: true,
      data: users
    });
  }

  // Get one user
  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await db("users")
        .where({ id });
      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          message: `The user with ${id} doesn't exist!`
        });
      } else {
        return res.status(200).json({
          success: true,
          data: user
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Update User 
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const user = await db("users")
        .where({ id });
      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          message: `User with id:${id} doesn't exist`
        });
      } else {
        await db("users")
          .where({ id })
          .update({ ...body });
        res.status(200).json({
          success: true,
          message: `User with id:${id} successfully updated`
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Delete User
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await db("users")
        .where({ id });
      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          message: `User with id:${id} doesn't exist`
        });
      } else {
        await db("users")
          .where({ id })
          .del();
        res.status(200).json({
          success: true,
          message: `User with id:${id} successfully deleted`
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default usersController;