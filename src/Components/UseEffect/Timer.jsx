import React, { useEffect, useState } from 'react'

const Timer = () => {

const [time,setTime]=useState(0)

useEffect(()=>{
    let interval=setInterval(()=>{
        setTime((prev)=>prev+1)
    },1000)

    return(()=>{
        clearInterval(interval)
    })
});


  return (
    <>

<h1>{time}</h1>


    </>
  )
}

export default Timer