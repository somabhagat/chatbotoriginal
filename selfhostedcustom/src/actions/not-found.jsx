/* import { Button, Reply, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return <Text>
      
      Leider kann ich keine Antwort auf Ihre Frage finden. Darf ich Sie mit einem unserer Mitarbeiter verbinden?
      <Button payload='contact'>Kontaktieren Sie uns</Button>  
    </Text>
  }
}
 */

import { Button, Reply, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        {(data) => {
          console.log('API Response in Bot:', data)
          return data
        }}
        Leider kann ich keine Antwort auf Ihre Frage finden. Darf ich Sie mit einem unserer Mitarbeiter verbinden?
        <Button payload='contact'>Kontaktieren Sie uns</Button>
      </Text>
    )
  }
}