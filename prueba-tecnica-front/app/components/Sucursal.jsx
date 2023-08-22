"use client"
import React, { useState } from "react"
import SucursalEstudios from "./SucursalEstudios";
import {useRouter} from 'next/navigation'

function Sucursal() {

const [campoValor, setCampoValor] = useState("")
const router = useRouter()

const handleInput = (e) => {
    const fieldValue = e.target.value;
      
    setCampoValor(fieldValue);
    console.log(campoValor);
}

const submitForm = async (e) => {
  e.preventDefault()

  router.push(`/sucursal/${campoValor}`)

}

  return (
    <div className="container-sucursal">
      <div className="container-form">
        <h3>Busqueda de sucursal</h3>     
        <form className="formulario" >
          <div className="caja">
            <label>Sucursal</label>
            <input type="text" required placeholder="001" name="sucursal" onChange={handleInput} />
          </div>
          <button type="button" onClick={submitForm}>Buscar Sucursal</button>
        </form>
        
      </div>
    </div>
  )
}

export default Sucursal