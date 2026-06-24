import React, { useState } from 'react'

const Students = () => {

   const [student,setStudents]=useState({
    name:"ali",age:"18",city:"bwp"
   }) 

//    console.log(student);

const handleChange=()=>{
    setStudents({...Students,city:"GB"})
}
   

  return (
    <div>

        <h1 className=' bg-amber-300'>{student.name}</h1>
        <h1>{student.age}</h1>
        <h1>{student.city}</h1>

        <button onClick={handleChange}>change city name</button>


      
    </div>
  )
}

export default Students
