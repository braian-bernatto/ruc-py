import React from 'react'
import Wave from './Wave'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full text-center pb-32 h-24 relative z-50'>
      <div>
        <a
          href='https://braian-bernatto.github.io/portfolio/'
          target='_blank'
          className='font-bold hover:underline'
        >
          Bernatto Inc.
        </a>{' '}
        | Todos los derechos reservados &copy; {year}
      </div>
      <Wave />
    </footer>
  )
}

export default Footer
