import { Ruc, Search } from '@/types'
import React, { useState } from 'react'

interface Props {
  setMensaje: (dato: string) => void
  setListado: (datos: Ruc[]) => void
}

const isNumeric = (str: any) => {
  str = str.replace(/\s/g, '').replaceAll(',', '').replaceAll('-', '')

  return (
    (typeof str === 'number' ||
      (typeof str === 'string' && str.trim() !== '')) &&
    !isNaN(str as number)
  )
}

const SearchInput: React.FC<Props> = ({ setMensaje, setListado }) => {
  const [buscar, setBuscar] = useState<Search>('')
  const [isNumber, setIsNumber] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBuscar(e.currentTarget.value)

    if (isNumeric(e.currentTarget.value)) {
      setIsNumber(true)
    } else {
      setIsNumber(false)
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey == false) {
      handleSubmit(e)
    }
  }

  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()

    if (isNumeric(buscar)) {
      setIsNumber(true)
    } else {
      setIsNumber(false)
    }

    const parametro = isNumber
      ? buscar.toString().replace(/\s/g, ';')
      : buscar.toString().replace(/\s+/g, ' ').trim()

    const getRuc = async () => {
      const url = new URL(
        isNumber
          ? `${process.env.API_ENDPOINT}/ruc/${parametro}`
          : `${process.env.API_ENDPOINT}/ruc/razon-social/${parametro}`
      )

      return await fetch(url)
        .then(res => res.json())
        .catch(e => console.log(e))
    }

    const listadoRuc = await getRuc()

    if (listadoRuc.length < 1) {
      setMensaje('No se encontraron coincidencias...')
      setTimeout(() => {
        setMensaje('')
      }, 5000)
    }
    setListado(listadoRuc)
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
