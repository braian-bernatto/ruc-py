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
    <main className='flex min-h-screen flex-col items-center px-5 sm:px-24'>
      <Image
        src='/escudo1.png'
        width={80}
        height={80}
        alt='escudo de paraguay'
      />
      <h1 className='border shadow rounded px-2 bg-white mb-5 text-center'>
        RUC 🪪
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
