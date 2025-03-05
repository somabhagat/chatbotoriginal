"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomReply = void 0;
var _react = _interopRequireDefault(require("react"));
const CustomReply = props => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    color: '#0000ff',
    border: '2px solid #0000ff',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    cursor: 'pointer'
  }
}, props.children);
exports.CustomReply = CustomReply;