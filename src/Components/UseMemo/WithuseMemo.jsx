import React, { useMemo, useState } from 'react'

const WithuseMemo = () => {
const [count,setCount]=useState(0)

let total=0

const counterAdd=()=>{
    for(let i=0; i<10000;i++){
total+=i

    }
    return total;
}
let result=  useMemo(()=>counterAdd(),[count])




  return (
    <div>
        <h1>this is usememo</h1>
<h1>{count}</h1>
<h1>{result}</h1>
<button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default WithuseMemo