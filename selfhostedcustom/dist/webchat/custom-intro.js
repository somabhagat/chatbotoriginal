"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomIntro = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _introImage = _interopRequireDefault(require("../assets/intro-image.jpg"));
const CustomIntro = () => {
  return /*#__PURE__*/_react2.default.createElement("img", {
    height: '50%',
    width: '100%',
    src: (0, _react.staticAsset)(_introImage.default)
  });
};
exports.CustomIntro = CustomIntro;