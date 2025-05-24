import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoDecorate from './components/PhotoDecorate'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Hello world</h1>
      <h6><b>KR ASHOK KUMAR NAIDU</b></h6>
       <h2>Decorated Photo with Animation</h2>
      <PhotoDecorate/>
    </>
  )
}

export default App
