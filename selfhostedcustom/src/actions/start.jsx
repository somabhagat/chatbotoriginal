import { Button, Reply, Text, RequestContext  } from '@botonic/react'
import React, { useEffect, useState, useContext } from 'react'
import {fetchApi} from './api.jsx'

export default function Start () {
  const [data, setData] = useState("");
  const context = useContext(RequestContext);
  
  useEffect(() => {
   async function init() 
   {
    let inputData = context.input?.data;
    if (inputData) {
      const antwort = await fetchApi(inputData);
      setData(antwort);
    } else {
      console.error("Input data is not available.");
    }
   }  
    
   init();
  }, [])

    return (
      <>
        <Text>
         {data.answer}
        </Text>
      </>
    )
}