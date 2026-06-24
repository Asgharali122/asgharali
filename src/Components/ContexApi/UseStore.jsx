import React, { useContext } from 'react'
import CreateStore from './CreateStore'

const UseStore = () => {
const {Name,age,email}=useContext(CreateStore)

console.log(Name);



  return (
    <div>

        <h1>{Name}</h1>

    </div>
  )
}

export default UseStore