import React, { useEffect, useState } from 'react'

const User = () => {
    const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => setData(json))
},[])
console.log(data);


  return (
    <>
    {
        data.users?.map((item,index)=>(
            <div key={index}>
           <h1>{item.firstName}</h1>
           <h1>{item.age}</h1>

            </div>
        ))
    }
    
    
    </>
  )
}

export default User