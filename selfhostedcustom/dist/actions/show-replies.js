"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
class _default extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  static contextType = _react.RequestContext;
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Text, null, "Look at these nice replies!", /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: '1'
    }, "First Reply"), /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: '2'
    }, "Second Reply"), /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: '3'
    }, "Third Reply"), /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: '4'
    }, "Fourth Reply"), /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: '5'
    }, "Fifth Reply")));
  }
}
exports.default = _default;