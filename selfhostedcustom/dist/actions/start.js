"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _calendarMessage = _interopRequireDefault(require("../webchat/calendar-message"));
class _default extends _react2.default.Component {
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Text, null, "This is an example bot of how to customize your webchat.", /*#__PURE__*/_react2.default.createElement(_react.Button, {
      url: "https://botonic.io"
    }, "Visit botonic.io")), /*#__PURE__*/_react2.default.createElement(_react.Text, null, "For example, this is a custom message type:"), /*#__PURE__*/_react2.default.createElement(_calendarMessage.default, null), /*#__PURE__*/_react2.default.createElement(_react.Text, null, "Something else?", /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: "replies"
    }, "Show me replies"), /*#__PURE__*/_react2.default.createElement(_react.Reply, {
      payload: "buttons"
    }, "Show me buttons")));
  }
}
exports.default = _default;