import Estudios from './components/Estudios'
import React from 'react'
import Sucursal from './components/Sucursal'
import Footer from './components/Footer'

async function fetchEstudios() {
 const res= await fetch("http://localhost:5008/estudio/listarEstudios")
  const data = await res.json()
  return data.result;
} 

async function IndexPage() { 
  const estudios = await fetchEstudios()

  return (
    <div>
      <div className='titulo-pagina'>
      <h1 className='titulo-page'>Prueba Tecnica</h1>
      </div>
      <Sucursal /> 
      <Footer />
    </div> 
  ) 
}

export default IndexPage;
