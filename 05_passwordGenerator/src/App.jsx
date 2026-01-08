import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setpassword] = useState("")
  // use ref
  const passwordRef =  useRef(null)

  const generatePassword = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+-=`~{}[]";
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char);
      
    }
    setpassword(pass);
  }, [length, numbers, characters])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    generatePassword();
  }, [generatePassword])
  return (
    <>
      <div className='bg-cyan-400  p-5 w-md rounded-lg justify-items-center'>
        <div className=' flex flex-wrap mb-3 text-cyan-950 font-bold text-lg rounded-lg border-b'>password Generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
          type="text"
          value={password}
          readOnly
          className='bg-white text-cyan-700 outline-none w-full py-1 px-3'
          placeholder='Generat Password...' />
          <button
            className='bg-cyan-950 text-cyan-100 outline-none px-3 py-0.5 shrink-0'
            onClick={copyPassword}
            >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={64}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numbers}
              id='numbetinput'
              onChange={() => {setNumbers((prev)=>!prev)}}
            />
            <label htmlFor='numberInput' >Numbers</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characters}
              id='charactersinput'
              onChange={() => {setCharacters((prev)=>!prev)}}
            />
            <label htmlFor='charactersInput' >Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
