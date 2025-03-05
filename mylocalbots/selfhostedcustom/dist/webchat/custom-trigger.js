"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTrigger = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _triggerButton = _interopRequireDefault(require("../assets/trigger-button.png"));
const CustomTrigger = () => {
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      cursor: 'pointer',
      position: 'fixed',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 20,
      right: 10,
      background: 'transparent',
      width: '90px',
      height: '90px',
      flexDirection: 'column',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement("img", {
    style: {
      height: '50%',
      width: '50%'
    },
    src: (0, _react.staticAsset)(_triggerButton.default)
  }), /*#__PURE__*/_react2.default.createElement("h3", null, "I am customizable"));
};
exports.CustomTrigger = CustomTrigger;