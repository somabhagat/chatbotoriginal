"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _help = _interopRequireDefault(require("./actions/help"));
var _notFound = _interopRequireDefault(require("./actions/not-found"));
var _showButtons = _interopRequireDefault(require("./actions/show-buttons"));
var _showReplies = _interopRequireDefault(require("./actions/show-replies"));
var _start = _interopRequireDefault(require("./actions/start"));
const routes = exports.routes = [{
  path: 'help',
  payload: 'help',
  action: _help.default
}, {
  path: 'buttons',
  input: i => i.payload == 'buttons' || i.data == 'buttons',
  action: _showButtons.default
}, {
  path: 'replies',
  input: i => i.payload == 'replies' || i.data == 'replies',
  action: _showReplies.default
}, {
  path: 'start',
  text: /^(hi|start|hello)$/i,
  action: _start.default
}, {
  path: '404',
  text: /.*/,
  action: _notFound.default
}];