import { listadoRuc } from '@/app/page'
import { Ruc, Search } from '@/types'
import React, { useState } from 'react'

interface Props {
  setListado: (datos: Ruc[]) => void
}

const SearchInput: React.FC<Props> = ({ setListado }) => {
  const [buscar, setBuscar] = useState<Search>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscar(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newListado = listadoRuc.filter(ruc => {
      const fullText = `${ruc.ci}-${ruc.dv} ${ruc.name} ${ruc.ci}`
      return fullText.toString().includes(buscar.toString())
    })
    setListado(newListado)
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
      <input
        className='rounded px-2 shadow-md'
        type='text'
        placeholder='Ingresa el ci de los contribuyentes'
        name='listado'
        value={buscar}
        onChange={e => handleInputChange(e)}
      />
      <button
        className={`bg-slate-500 text-white rounded shadow-md px-2 py-1`}
        type='submit'
      >
        Buscar{' '}
        <span
          className={`transition ${
            typeof buscar === 'string' && buscar!.length > 0
              ? 'animate-pulse contrast-200'
              : ''
          }`}
        >
          🔎
        </span>
      </button>
    </form>
  )
}

export default SearchInput
