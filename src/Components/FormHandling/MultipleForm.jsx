import React, { useState } from 'react'

const MultipleForm = () => {

const [form,setForm]=useState({
    name:"",
    email:"",
   age:""
    
})

const handleChange=(e)=>{
    const {name,value,type}=e.target

    setForm((prev)=>(
        {

        ...prev,
        [name]:value

    }
    ))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("this is form value",form);
    
}


  return (
    <div>


    
      <form action="" onSubmit={handleSubmit}>

   <label htmlFor="">name:</label>
   <input type="name"  placeholder='enter your name' name='name' value={form.name} onChange={handleChange} />
    <label htmlFor="">email:</label>
   <input type="email"  placeholder='enter your name' name='email' value={form.email} onChange={handleChange} />
      <label htmlFor="">age:</label>
   <input type="age"  placeholder='enter your name' name='age' value={form.age} onChange={handleChange} />
   <button type='submit'>submit</button>



      </form>


    </div>
  )
}

export default MultipleForm