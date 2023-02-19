"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("../database/config"));
var _routes = _interopRequireDefault(require("./routes"));
// configure dotenv library
_dotenv.default.config();

// initialize app with express
var app = (0, _express.default)();
app.use((0, _cors.default)());
app.enable('trust proxy');
if (process.env.NODE_ENV !== 'production') app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());

// routes
app.use('/api/v1', _routes.default);
app.all("*", function (req, res) {
  res.send("route not found");
});

// PORT
var PORT = process.env.PORT;
Promise.all([_config.default.raw('SELECT VERSION()'), app.listen(PORT)]).then(function (_ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
    dbResult = _ref2[0];
  console.log("DB successfully connected: ".concat(dbResult[0][0]["VERSION()"]));
  console.log("Server listening on ".concat(PORT));
}).catch(function (error) {
  console.error(error);
  process.exit(1);
});