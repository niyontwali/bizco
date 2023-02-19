"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoutes = _interopRequireDefault(require("./userRoutes"));
// Router Instance
var router = _express.default.Router();

// Routes modules
router.use("/users", _userRoutes.default);
var _default = router;
exports.default = _default;