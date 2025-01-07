import { Button, Reply, Text, RequestContext  } from '@botonic/react'
import React, { useEffect, useState, useContext } from 'react'
import {fetchApi} from './api.jsx'

export default function Start () {
  const [data, setData] = useState("");
  const context = useContext(RequestContext);
 
  useEffect(() => {
   async function init() {
    const antwort = await fetchApi(context.input.data);
    setData(antwort);
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