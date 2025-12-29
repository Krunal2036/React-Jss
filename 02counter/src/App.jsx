import { useState } from 'react'
import './App.css'

function App() {
  // let count = 0;

  let [count, setCount] = useState(0)

  const Add_Value = ()=>{
    console.log(count);
    setCount(count +1)
  }

  const Remove_Value = ()=>{
    console.log(count);
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={Add_Value} >Add-Value : {count}</button>
      <button onClick={Remove_Value} >Remove-Value : {count}</button>
    </>
  )
}

export default App
