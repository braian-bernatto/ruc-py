'use client'

import RucList from '@/components/RucList'
import SearchInput from '@/components/SearchInput'
import { Ruc } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [listado, setListado] = useState<Ruc[]>([])
  const [mensaje, setMensaje] = useState<string>('')

  return (
    <main className='flex flex-col items-center px-5 sm:px-24 text-xs sm:text-base'>
      <Image
        src='/escudo1.png'
        width={80}
        height={80}
        alt='escudo de paraguay'
      />
      <h1 className='border shadow rounded px-2 bg-white mb-5 text-center flex justify-center items-center gap-2 py-1'>
        RUC
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
          />
        </svg>
      </h1>
      <SearchInput setMensaje={setMensaje} setListado={setListado} />
      {listado.length > 0 ? (
        <RucList listado={listado} />
      ) : (
        <span className='animate-pulse'>
          {mensaje.length > 0 ? mensaje : ''}
        </span>
      )}
    </main>
  )
}
