"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyWebview = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
class MyWebview extends _react2.default.Component {
  static contextType = _react.RequestContext;
  state = {
    counter: 0
  };
  componentDidMount() {
    document.title = 'MyBot | MyWebview';
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  close() {
    // Here we want to explicitly emit a message after closing a webview.
    this.context.closeWebview({
      payload: 'closed_webview'
    });
  }
  render() {
    return /*#__PURE__*/_react2.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react2.default.createElement("h1", null, "This is a Botonic Webview!"), /*#__PURE__*/_react2.default.createElement("button", {
      style: {
        width: '20%'
      },
      onClick: () => this.handleClick()
    }, "Click Me"), /*#__PURE__*/_react2.default.createElement("h2", null, this.state.counter), /*#__PURE__*/_react2.default.createElement("button", {
      style: {
        width: '50%'
      },
      onClick: () => this.close()
    }, "Click me to close this webview"));
  }
}
exports.MyWebview = MyWebview;