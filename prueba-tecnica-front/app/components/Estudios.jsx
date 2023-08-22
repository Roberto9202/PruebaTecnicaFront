"use client";
import React from 'react'
import {useRouter} from 'next/navigation'

export default function Estudios({estudios}) {
    const router = useRouter()
  return (
    <ul>
        {
          estudios.estudio.map((estudio) => (
            <li key={estudio.id}
                onClick={() => {
                    router.push(`/estudios/${estudio.id}`)
                }}>
              <div>
                <h5>{estudio.estudio}</h5>
                <p>{estudio.detalle}</p>
              </div>
            </li>
          ))
        }
      </ul>
  )
}
