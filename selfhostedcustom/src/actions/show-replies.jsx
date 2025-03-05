import { Reply, RequestContext, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = RequestContext

  render() {
    return (
      <>
        <Text>
          Bitte wählen Sie ihre Frage aus dieser Liste.
          <Reply payload={'1'}>Welche Lösungen und Use-Cases unterstützt die CONTEXTSUITE?</Reply>
          <Reply payload={'2'}>Wer arbeitet mit CONTEXSUITE?</Reply>
          <Reply payload={'3'}>Ist die CONTEXTSUITE eine KI-Plattform?</Reply>
          <Reply payload={'4'}>Ist die CONTEXTSUITE eine Low-Code-Plattform?</Reply>
          <Reply payload={'5'}>Welche Standardanwendungen bietet die CONTEXTSUITE?</Reply>
        </Text>
      </>
    )
  }
}
