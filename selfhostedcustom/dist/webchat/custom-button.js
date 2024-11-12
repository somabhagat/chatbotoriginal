"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButton = void 0;
var _react = _interopRequireDefault(require("react"));
const CustomButton = props => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    color: 'white',
    border: '1px solid black',
    backgroundColor: 'blue',
    borderRadius: 20,
    cursor: 'pointer',
    paddingLeft: 15
  }
}, props.children);
exports.CustomButton = CustomButton;