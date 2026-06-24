import React, { useEffect, useState } from 'react'

const Window = () => {

const [win,setWin]=useState(window.innerWidth)
useEffect(()=>{
   const handleChange=()=>{
     setWin(window.innerWidth)
   }
   window.addEventListener("resize",handleChange)
   return(()=>{
       window.removeEventListener("resize",handleChange)
    
})
})


  return (
    <div>

<h1>{win}</h1>


    </div>
  )
}

export default Window