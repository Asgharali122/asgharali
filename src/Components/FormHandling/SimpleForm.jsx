import React, { useState } from 'react'

const SimpleForm = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("this name value:",name);
        console.log("this name value:",email);

        
    }

  return (
    <>
    
      <form action="" onSubmit={handleSubmit}>

   <label htmlFor="">name:</label>
   <input type="name"  placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
    <label htmlFor="">email:</label>
   <input type="email"  placeholder='enter your name' value={email} onChange={(e)=>setEmail(e.target.value)} />
   <button type='submit'>submit</button>



      </form>
    
    
    </>
  )
}

export default SimpleForm