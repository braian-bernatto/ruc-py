import React from 'react'

const Manual = () => {
  return (
    <a
      href='https://github.com/braian-bernatto/ruc-py#readme'
      target='_blank'
      className='absolute top-3 right-10 tooltip tooltip-bottom rounded-full shadow w-10 h-10 flex items-center justify-center bg-white z-50'
      data-tip='Ir a manual'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 stroke-[#71839c] hover:stroke-[#64748b] hover:scale-105 transition'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
        />
      </svg>
    </a>
  )
}

export default Manual
