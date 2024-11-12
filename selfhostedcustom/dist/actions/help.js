"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _carousel = _interopRequireDefault(require("./carousel"));
class _default extends _react2.default.Component {
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Text, null, "You can customize me by modifying the components I have under 'webchat' directory."), /*#__PURE__*/_react2.default.createElement(_react.Text, null, "Play with all the available attributes and let's see if you can overcome my current styling."), /*#__PURE__*/_react2.default.createElement(_carousel.default, null));
  }
}
exports.default = _default;