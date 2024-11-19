"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@botonic/react");
var _react2 = _interopRequireDefault(require("react"));
var _reactCalendar = _interopRequireDefault(require("react-calendar"));
class CalendarMessage extends _react2.default.Component {
  static contextType = _react.WebchatContext;
  render() {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_reactCalendar.default, {
      onChange: date => this.context.sendText(`Booked for ${date.toLocaleDateString()}`)
    }), /*#__PURE__*/_react2.default.createElement("p", null, this.props.children));
  }
}
var _default = exports.default = (0, _react.customMessage)({
  name: 'calendar',
  component: CalendarMessage
});