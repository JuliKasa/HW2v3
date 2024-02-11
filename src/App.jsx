import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from './ClassComps/Colors'
import ATP from './ClassComps/ATP'
import Table from './ClassComps/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color/> 
    <ATP/>
    <Table/>
    </>
  )
}

export default App
