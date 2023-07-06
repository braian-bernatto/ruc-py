'use client'

import RucList from '@/components/RucList'
import SearchInput from '@/components/SearchInput'
import { Ruc, Search } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

export const listadoRuc: Ruc[] = [
  { ci: 5353277, name: 'bernatto colman, braian', dv: 5 },
  { ci: 5353277, name: 'gonzalez xxxx', dv: 4 },
  { ci: 5353275, name: 'mendieta xxxx', dv: 3 },
  { ci: 5353274, name: 'pereira xxxxx', dv: 2 },
  { ci: 5353273, name: 'miyazaki xxxxx', dv: 1 },
  { ci: 5353272, name: 'colman xxxxx', dv: 0 }
]

export default function Home() {
  const [listadoFiltrado, setListadoFiltrado] = useState<Ruc[]>([])
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
      <SearchInput setMensaje={setMensaje} setListado={setListadoFiltrado} />
      {listadoFiltrado.length > 0 ? (
        <RucList listado={listadoFiltrado} />
      ) : (
        <span className='animate-pulse'>
          {mensaje.length > 0 ? mensaje : ''}
        </span>
      )}
    </main>
  )
}
