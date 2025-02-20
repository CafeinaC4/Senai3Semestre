import { useState } from 'react'
import './App.css'
import { GiDiceSixFacesOne, GiDiceSixFacesTwo, GiDiceSixFacesThree, GiDiceSixFacesFour, GiDiceSixFacesFive, GiDiceSixFacesSix} from "react-icons/gi";

function App() {
  const [historico, setHistorico] = useState([])
  const [dadoRolado, setDadoRolado] = useState([])
  const [faceDado, setFaceDado] = useState([<GiDiceSixFacesOne/>, <GiDiceSixFacesTwo/>, <GiDiceSixFacesThree/>, <GiDiceSixFacesFour/>, <GiDiceSixFacesFive />, <GiDiceSixFacesSix/>])
  const [quantidadeDados, setQuantidadeDados] = useState('')

  const gerarNumeroAleatorio = () => {
      setHistorico([])
      for(let i=0; i < quantidadeDados ; i++){
      const n = Math.floor(Math.random() * faceDado.length)
      setDadoRolado(faceDado[n])
      setHistorico(prevHistorico => [...prevHistorico, faceDado[n]])
      }
  };

  const dados = () =>{
    setQuantidadeDados(event.target.value)
  };


  return (
    <>
      <div className='app-container'>
        <div>
          <h1>Rolagem de dados</h1>
        </div>
         <p className='dado'>{historico.map((faceDado, index) => <span key={index}>{faceDado} </span>)}</p>
          <button className='button' onClick={gerarNumeroAleatorio}>Role o Dado</button>
          <input type='number' onChange={dados}></input>
      </div>
    </>
  )
}

export default App
