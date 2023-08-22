import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className='header'>
      <nav>
        <ul className='nav-links'>
          <li>
              <Link className='link' href='/'>Inicio</Link>
          </li>
          <li>
            <Link className='link' href='/acercade'>Acerca de</Link>
          </li>
          <li>
            <Link className='link' href='/servicios'>Servicios</Link>
          </li>
        </ul>
      </nav>
    </header>
   
  )
}
