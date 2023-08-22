"use client";
import React from 'react'

function SucursalEstudios({Sucursalestudios}) {
  //console.log(Sucursalestudios.success)
  const success = Sucursalestudios.success
  const result = Sucursalestudios.result
  return (
    <div className='container-tabla-estudios'>
      <h2 className='titulo-estudios'>Estudios Disponibles</h2>
    {success ? 
      result.estudio.map((estudio) => (
        <div className='fondo' key={estudio.id}>
            <div className="columna" >
                <h3>{estudio.estudio}</h3>
                <hr></hr>
                <p>{estudio.detalle}</p>
            </div>
        </div>
      ))
      :
      <div className='no-resultados'>
        <p>No hubo resultados para esa sucursal</p>
      </div>
    }
    </div>
  )
}

export default SucursalEstudios