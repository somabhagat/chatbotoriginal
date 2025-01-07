import { Button, RequestContext, Text } from '@botonic/react'
import React from 'react'

import { MyWebview } from '../webviews/my-webview'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = RequestContext

  render() {
    return (
      <>
        <Text>
        Worüber möchten Sie sich heute informieren?
          <Button url={'https://www.moresophy.com/contextsuite-faq'}>
            Klicken Sie hier für häufige Fragen zu CONTEXTSUITE und KI-Lösungen.
          </Button>
          <Button webview={MyWebview}>To open a webview</Button>
          <Button payload={'customized-payload'}>Or to send a payload</Button>
        </Text>
      </>
    )
  }
}
