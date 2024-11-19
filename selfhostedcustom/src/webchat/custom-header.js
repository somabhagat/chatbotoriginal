import { staticAsset } from '@botonic/react'
import React from 'react'
import Icon from '../assets/moresophylogo.svg'

export const CustomHeader = () => {
  return (
    <div
      style={{
        
        background: '#F2E7E4', 
        borderRadius: '0px 0px 0px 0px',
        height: 70, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <img
        style={{ margin: '0px 12px', width: 200 }} 
        src={staticAsset(Icon)}
      />
      
      <div
        style={{
          cursor: 'pointer',
          fontSize: 26,
          color: 'white', // White color for the "✕"
          backgroundColor: '#00223D', // Blue background
          borderRadius: '50%', // Makes it circular
          width: 30, // **Added to define the size of the circle**
          height: 30, // **Added to define the size of the circle**
          marginRight: 10,
          justifyContent: 'center',
          display: 'flex',
        }}
        onClick={() => {
          Botonic.close()
        }}
      >
        ✕
      </div>
      
    </div>
  )
}
