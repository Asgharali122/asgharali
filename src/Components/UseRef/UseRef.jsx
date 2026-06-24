import React, { useRef } from 'react'

const UseRef = () => {

    let nameRef=useRef()
    let emailRef=useRef()

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("this is name value",nameRef.current.value);
    console.log("this is email value",emailRef.current.value);

    
}

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name:</label>
        <input type="name" placeholder='enter your name' ref={nameRef} /> <br /> <br /> 
         <label htmlFor="">email:</label>
        <input type="email" placeholder='enter your name' ref={emailRef} /> 
        <button type='submit'>submit</button>
    </form>


    </>
  )
}

export default UseRef