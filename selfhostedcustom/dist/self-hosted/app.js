"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelfHostedApp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _reactBot = require("@botonic/react/src/react-bot");
var _webchatApp = require("@botonic/react/src/webchat-app");
var _webchat = require("@botonic/react/src/webchat");
var _webchat2 = require("../webchat");
// pass in your webchat values, remove if not applicable.

class SelfHostedApp extends _webchatApp.WebchatApp {
  constructor({
    theme = {},
    persistentMenu,
    blockInputs,
    emojiPicker,
    enableAttachments,
    onInit,
    onOpen,
    onClose,
    onMessage,
    ...botOptions
  }) {
    super({
      theme,
      persistentMenu,
      blockInputs,
      emojiPicker,
      enableAttachments,
      onInit,
      onOpen,
      onClose,
      onMessage
    });
    this.bot = new _reactBot.ReactBot({
      ...botOptions
    });
  }
  render(dest, optionsAtRuntime = _webchat2.webchat) {
    let {
      theme = {},
      persistentMenu,
      blockInputs,
      emojiPicker,
      enableAttachments,
      onInit,
      onOpen,
      onClose,
      onMessage,
      ...webchatOptions
    } = optionsAtRuntime;
    theme = {
      ...this.theme,
      ...theme
    };
    persistentMenu = persistentMenu || this.persistentMenu;
    blockInputs = blockInputs || this.blockInputs;
    emojiPicker = emojiPicker || this.emojiPicker;
    enableAttachments = enableAttachments || this.enableAttachments;
    this.onInit = onInit || this.onInit;
    this.onOpen = onOpen || this.onOpen;
    this.onClose = onClose || this.onClose;
    this.onMessage = onMessage || this.onMessage;
    (0, _reactDom.render)(/*#__PURE__*/_react.default.createElement(_webchat.Webchat, (0, _extends2.default)({
      ref: this.webchatRef
    }, webchatOptions, {
      theme: theme,
      persistentMenu: persistentMenu,
      blockInputs: blockInputs,
      emojiPicker: emojiPicker,
      enableAttachments: enableAttachments,
      getString: (stringId, session) => this.bot.getString(stringId, session),
      setLocale: (locale, session) => this.bot.setLocale(locale, session),
      onInit: (...args) => this.onInitWebchat(...args),
      onOpen: (...args) => this.onOpenWebchat(...args),
      onClose: (...args) => this.onCloseWebchat(...args),
      onUserInput: (...args) => this.onUserInput(...args)
    })), dest);
  }
  async onUserInput({
    input,
    session,
    lastRoutePath
  }) {
    this.onMessage && this.onMessage(this, {
      from: 'user',
      message: input
    });
    let resp = await this.bot.input({
      input,
      session,
      lastRoutePath
    });
    this.onMessage && resp.response.map(r => this.onMessage(this, {
      from: 'bot',
      message: r
    }));
    this.webchatRef.current.addBotResponse(resp);
  }
}
exports.SelfHostedApp = SelfHostedApp;