"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers/");
// Inititalize route
var router = _express.default.Router();

// routes
router.get("/", _controllers.usersController.getUsers);
router.get("/:id", _controllers.usersController.getUser);
router.post("/", _controllers.usersController.createUser);
router.put("/:id", _controllers.usersController.updateUser);
router.delete("/:id", _controllers.usersController.deleteUser);
var _default = router;
exports.default = _default;