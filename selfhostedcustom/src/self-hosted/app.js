import React from 'react'
import { render } from 'react-dom'

import { ReactBot } from '@botonic/react/src/react-bot'
import { WebchatApp } from '@botonic/react/src/webchat-app'
import { Webchat } from '@botonic/react/src/webchat'
import { webchat } from '../webchat' // pass in your webchat values, remove if not applicable.

export class SelfHostedApp extends WebchatApp {
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
      onMessage,
    })
    this.bot = new ReactBot({
      ...botOptions,
    })
  }

  render(dest, optionsAtRuntime = webchat) {
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
    } = optionsAtRuntime
    theme = { ...this.theme, ...theme }
    persistentMenu = persistentMenu || this.persistentMenu
    blockInputs = blockInputs || this.blockInputs
    emojiPicker = emojiPicker || this.emojiPicker
    enableAttachments = enableAttachments || this.enableAttachments
    this.onInit = onInit || this.onInit
    this.onOpen = onOpen || this.onOpen
    this.onClose = onClose || this.onClose
    this.onMessage = onMessage || this.onMessage
    render(
      <Webchat
        ref={this.webchatRef}
        {...webchatOptions}
        theme={theme}
        persistentMenu={persistentMenu}
        blockInputs={blockInputs}
        emojiPicker={emojiPicker}
        enableAttachments={enableAttachments}
        getString={(stringId, session) => this.bot.getString(stringId, session)}
        setLocale={(locale, session) => this.bot.setLocale(locale, session)}
        onInit={(...args) => this.onInitWebchat(...args)}
        onOpen={(...args) => this.onOpenWebchat(...args)}
        onClose={(...args) => this.onCloseWebchat(...args)}
        onUserInput={(...args) => this.onUserInput(...args)}
      />,
      dest
    )
  }

  async onUserInput({ input, session, lastRoutePath }) {
    this.onMessage && this.onMessage(this, { from: 'user', message: input })
    let resp = await this.bot.input({ input, session, lastRoutePath })
    this.onMessage &&
      resp.response.map(r => this.onMessage(this, { from: 'bot', message: r }))
    this.webchatRef.current.addBotResponse(resp)
  }
}