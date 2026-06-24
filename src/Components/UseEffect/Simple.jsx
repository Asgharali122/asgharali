import React, { useEffect, useState } from 'react'

const Simple = () => {
  const [inc, setInc] = useState(0)
  const [dec, setDec] = useState(0)

  const plus = () => {
    setInc(inc + 1)
  }

  const minus = () => {
    setDec(dec - 1)
  }

  useEffect(() => {
    alert(inc)
    alert(dec)
  }, [])



  return (
    <div>
      <h1>{inc}</h1>
      <h1>{dec}</h1>

      <button onClick={plus}>increment</button>
      <button onClick={minus}>decrement</button>
    </div>
  )
}

export default Simple