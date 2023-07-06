import { listadoRuc } from '@/app/page'
import { Ruc, Search } from '@/types'
import React, { useState } from 'react'

interface Props {
  setMensaje: (dato: string) => void
  setListado: (datos: Ruc[]) => void
}

const SearchInput: React.FC<Props> = ({ setMensaje, setListado }) => {
  const [buscar, setBuscar] = useState<Search>('')
  const [multiple, setMultiple] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBuscar(e.currentTarget.value)
    if (e.currentTarget.value.includes(',')) {
      setMultiple(true)
    } else {
      setMultiple(false)
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey == false) {
      handleSubmit(e)
    }
  }

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()

    const parametro = multiple
      ? buscar.toString().replace(/\s/g, '').split(',')
      : buscar.toString().replace(/\s/g, '')

    const newListado = listadoRuc.filter(ruc => {
      const fullText = `${ruc.ci}-${ruc.dv} ${ruc.name} ${ruc.ci}`
      let exists = false

      if (Array.isArray(parametro)) {
        parametro.forEach(element => {
          if (element === '') return
          if (fullText.toString().includes(element)) exists = true
        })

        return exists
      }

      return fullText.toString().includes(parametro.toString())
    })

    if (newListado.length < 1) {
      setMensaje('No se encontraron coincidencias...')
      setTimeout(() => {
        setMensaje('')
      }, 5000)
    }
    setListado(newListado)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-wrap items-center justify-center gap-2 mb-4 w-full'
    >
      <textarea
        className='textarea textarea-xs textarea-bordered s:w-full w-[300px]'
        placeholder='Ingresa el listado de ruc separados por comas'
        onChange={e => handleInputChange(e)}
        value={buscar}
        onKeyDown={handleEnter}
      ></textarea>

      <button
        className={`bg-slate-500 text-white rounded shadow-md px-2 py-1 flex-none`}
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
