"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomHeader = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _r2d2Logo = _interopRequireDefault(require("../assets/r2d2-logo.png"));
const CustomHeader = () => {
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      background: 'linear-gradient(90deg, #184BA5 0%, #5E90C3 100%)',
      borderRadius: '6px 6px 0px 0px',
      height: 70,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement("img", {
    style: {
      margin: '0px 12px',
      width: 38,
      color: 'white'
    },
    src: (0, _react.staticAsset)(_r2d2Logo.default)
  }), /*#__PURE__*/_react2.default.createElement("h1", {
    style: {
      fontFamily: 'Noto Sans JP',
      src: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 10,
      color: '#ffffff',
      width: '80%'
    }
  }, "My customized header"), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      cursor: 'pointer',
      fontSize: 16,
      color: 'white',
      width: '30%',
      justifyContent: 'center',
      display: 'flex'
    },
    onClick: () => {
      Botonic.close();
    }
  }, "\u2715"));
};
exports.CustomHeader = CustomHeader;