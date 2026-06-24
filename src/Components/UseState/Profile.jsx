import React, { useState } from 'react'

const Profile = () => {
  const [name,Setname]=useState("") 
  const [age,SetAge]=useState(18) 

    
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <button onClick={()=>Setname("Asghar khan")}>chnage name</button>
        <button onClick={()=>SetAge(age+1)}>age add</button>
      
    </div>
  )
}

export default Profile
