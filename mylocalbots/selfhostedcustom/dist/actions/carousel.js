"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
class _default extends _react2.default.Component {
  static contextType = _react.RequestContext;
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react.Carousel, {
      typing: 1
    }, /*#__PURE__*/_react2.default.createElement(_react.Element, null, /*#__PURE__*/_react2.default.createElement(_react.Pic, {
      src: 'https://previews.123rf.com/images/benjamas154/benjamas1541508/benjamas154150800054/43992916-sewing-buttons-plastic-buttons-colorful-buttons-background-buttons-close-up-buttons-background.jpg'
    }), /*#__PURE__*/_react2.default.createElement(_react.Title, null, "Buttons"), /*#__PURE__*/_react2.default.createElement(_react.Subtitle, null, "Buttons"), /*#__PURE__*/_react2.default.createElement(_react.Button, {
      payload: 'buttons'
    }, "Buttons")), /*#__PURE__*/_react2.default.createElement(_react.Element, null, /*#__PURE__*/_react2.default.createElement(_react.Pic, {
      src: 'https://www.firetext.co.uk/sites/default/files/images/features/thumbnail/replies.png'
    }), /*#__PURE__*/_react2.default.createElement(_react.Title, null, "Replies"), /*#__PURE__*/_react2.default.createElement(_react.Subtitle, null, "Replies"), /*#__PURE__*/_react2.default.createElement(_react.Button, {
      payload: 'replies'
    }, "Replies")));
  }
}
exports.default = _default;