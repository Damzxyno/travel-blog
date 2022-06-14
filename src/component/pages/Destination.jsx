

import React from 'react'
import {useParams} from "react-router-dom"

const Destination = () => {
    const {id,g} = useParams()
    
  return (
      <>
        <div>damy</div>
        <p>{id}</p>
        <p>{g}</p>
      </>
  
  )
}

export default Destination