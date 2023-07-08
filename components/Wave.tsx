import React from 'react'

const Wave = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ WebkitTransition: '0.3s', transition: '0.3s' }}
      version='1.1'
      viewBox='0 0 1440 240'
      className='absolute bottom-0 -z-10'
    >
      <defs>
        <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
          <stop offset='0%' stopColor='rgba(105.796, 116.7, 132.374, 1)'></stop>
          <stop
            offset='100%'
            stopColor='rgba(154.949, 167.171, 184.74, 1)'
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill='url(#sw-gradient-0)'
        d='M0 192l120 4c120 4 360 12 600-20s480-104 720-128 480 0 720 32 480 72 720 64 480-64 720-60 480 68 720 76 480-40 720-76 480-60 720-40 480 84 720 104 480-4 720-12 480 0 720-20 480-68 720-88 480-12 720 8 480 52 720 48 480-44 720-32 480 76 720 100 480 8 720-24 480-80 720-104 480-24 720-16 480 24 720 24 480-16 720-8 480 40 720 64 480 40 720 48 480 8 600 8h120v96H0z'
      ></path>
    </svg>
  )
}

export default Wave
