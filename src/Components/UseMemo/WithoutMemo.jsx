import React, { useState } from 'react'

const WithoutMemo = () => {
const [count,setCount]=useState(0)

let total=0

const counterAdd=()=>{
    for(let i=0; i<1000000;i++){
total+=i

    }
    return total;
}
let result=counterAdd()




  return (
    <div>
<h1>{count}</h1>
<h1>{result}</h1>
<button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default WithoutMemo