"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _config = _interopRequireDefault(require("../../database/config"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var usersController = /*#__PURE__*/function () {
  function usersController() {
    (0, _classCallCheck2.default)(this, usersController);
  }
  (0, _createClass2.default)(usersController, null, [{
    key: "createUser",
    value: // create users
    function () {
      var _createUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
        var _req$body, firstname, lastname, email, password;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password;
              _context.next = 4;
              return (0, _config.default)("users").insert({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
              });
            case 4:
              res.status(201).json({
                success: true,
                message: "User successfully created"
              });
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                success: false,
                message: _context.t0.message
              });
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }
      return createUser;
    }() // Get all users
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
        var users;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _config.default)("users");
            case 2:
              users = _context2.sent;
              res.status(200).json({
                success: true,
                data: users
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getUsers(_x3, _x4) {
        return _getUsers.apply(this, arguments);
      }
      return getUsers;
    }() // Get one user
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
        var id, user;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return (0, _config.default)("users").where({
                id: id
              });
            case 4:
              user = _context3.sent;
              if (!(user.length === 0)) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", res.status(404).json({
                success: false,
                message: "The user with ".concat(id, " doesn't exist!")
              }));
            case 9:
              return _context3.abrupt("return", res.status(200).json({
                success: true,
                data: user
              }));
            case 10:
              _context3.next = 15;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              res.status(500).json({
                success: false,
                message: _context3.t0.message
              });
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 12]]);
      }));
      function getUser(_x5, _x6) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }() // Update User 
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
        var id, body, user;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              body = req.body;
              _context4.next = 5;
              return (0, _config.default)("users").where({
                id: id
              });
            case 5:
              user = _context4.sent;
              if (!(user.length === 0)) {
                _context4.next = 10;
                break;
              }
              return _context4.abrupt("return", res.status(404).json({
                success: false,
                message: "User with id:".concat(id, " doesn't exist")
              }));
            case 10:
              _context4.next = 12;
              return (0, _config.default)("users").where({
                id: id
              }).update(_objectSpread({}, body));
            case 12:
              res.status(200).json({
                success: true,
                message: "User with id:".concat(id, " successfully updated")
              });
            case 13:
              _context4.next = 18;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              res.status(500).json({
                success: false,
                message: _context4.t0.message
              });
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 15]]);
      }));
      function updateUser(_x7, _x8) {
        return _updateUser.apply(this, arguments);
      }
      return updateUser;
    }() // Delete User
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
        var id, user;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              _context5.next = 4;
              return (0, _config.default)("users").where({
                id: id
              });
            case 4:
              user = _context5.sent;
              if (!(user.length === 0)) {
                _context5.next = 9;
                break;
              }
              return _context5.abrupt("return", res.status(404).json({
                success: false,
                message: "User with id:".concat(id, " doesn't exist")
              }));
            case 9:
              _context5.next = 11;
              return (0, _config.default)("users").where({
                id: id
              }).del();
            case 11:
              res.status(200).json({
                success: true,
                message: "User with id:".concat(id, " successfully deleted")
              });
            case 12:
              _context5.next = 17;
              break;
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              res.status(500).json({
                success: false,
                message: _context5.t0.message
              });
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 14]]);
      }));
      function deleteUser(_x9, _x10) {
        return _deleteUser.apply(this, arguments);
      }
      return deleteUser;
    }()
  }]);
  return usersController;
}();
var _default = usersController;
exports.default = _default;