import { useState, useRef } from 'react'
import './App.css'

const App = () => {
  const[crachas, setCrachas] = useState('')
  const[btnCopy, setBtnCopy] = useState('Copiar!')
  const[inputNumber, setInputNumber] = useState('')
  const textRef = useRef(null)
  
  const getInputNumber = (e) => {
    setInputNumber(e.target.value)  
  }
  
  const generate = (e) => {
    e.preventDefault()

    const characters = "1234567890"
    
    const length = inputNumber
    
    let cracha = ''
    
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      
      cracha += characters[position]
      setCrachas(cracha)
    }
  }
  
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(crachas)
    setBtnCopy('Copiado!')
  }
  
  const generateAnother = () => {
    setInputNumber('')
    setBtnCopy('Copiar')
  }
  
  let yourCracha = `Seu ID único de crachá é ${crachas}`
  
  return (
    <div className='bigBox'>
      <h1>Gerador de ID de Crachá</h1>

        <div className='boxInputAndBtnGenerate'>
          <input type='text' placeholder='Números de caracteres' value={inputNumber} onChange={getInputNumber} ref={textRef}/>
          <button onClick={generate}>Gerar!</button>
        </div>
        <button onClick={copyToClipboard}>{btnCopy}</button>
        <button onClick={generateAnother}>Gerar outro!</button>
        <div className='boxYourCracha'>{yourCracha}</div>

    </div>  
  )
  
  
} 

export default App
