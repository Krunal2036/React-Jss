// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card2 from './components/cards'

function App() {
  // const [count, setCount] = useState(0)
   const myObj ={
    name :'krunal',
    age : 24
  }
1
  return (
    <>
      <h1 className="text-blue-200 rounded-lg bg-blue-700 text-center font-light p-2">
        Hello world
      </h1>
      <Card2 obj = {myObj}/>
      <Card2/>
    </>
  )
}

export default App