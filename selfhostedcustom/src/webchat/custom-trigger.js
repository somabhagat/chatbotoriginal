import { staticAsset } from '@botonic/react'
import React from 'react'

import Icon from '../assets/chaticon.svg'

export const CustomTrigger = () => {
  return (
    <div
      style={{
        
        cursor: 'pointer',
        position: 'fixed',
        borderRadius: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        right: 20,
        background: '#F2E7E4',
        width: '90px',
        height: '90px',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <img
        style={{
          height: '75%',
        }}
        src={staticAsset(Icon)}
      />
      
    </div>
  )
}
