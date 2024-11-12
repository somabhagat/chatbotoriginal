"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _myWebview = require("../webviews/my-webview");
class _default extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  static contextType = _react.RequestContext;
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Text, null, "What about these buttons?", /*#__PURE__*/_react2.default.createElement(_react.Button, {
      url: 'https://botonic.io/docs/concepts/webviews'
    }, "You can use me to open links"), /*#__PURE__*/_react2.default.createElement(_react.Button, {
      webview: _myWebview.MyWebview
    }, "To open a webview"), /*#__PURE__*/_react2.default.createElement(_react.Button, {
      payload: 'customized-payload'
    }, "Or to send a payload")));
  }
}
exports.default = _default;