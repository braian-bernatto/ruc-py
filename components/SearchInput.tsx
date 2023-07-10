import { Ruc, Search } from '@/types'
import React, { useState } from 'react'

interface Props {
  setLoading: (estado: boolean) => void
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

const SearchInput: React.FC<Props> = ({
  setLoading,
  setMensaje,
  setListado
}) => {
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
    console.log(process.env.NEXT_PUBLIC_API_ENDPOINT)

    if (isNumeric(buscar)) {
      setIsNumber(true)
    } else {
      setIsNumber(false)
    }

    const parametro = isNumber
      ? buscar.toString().replaceAll(',', '').replace(/\s/g, ';') //reemplaza todos los espacios en blanco por un punto y coma dejando "23424;23424"
      : buscar.toString().replaceAll(/\s+/g, ' ').replaceAll(',', ';').trim() //quita todos los espacios extras entre palabras y con trim los espacios a los costados

    const getRuc = async () => {
      setLoading(true)
      const url = new URL(
        isNumber
          ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ruc/${parametro}`
          : `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ruc/razon-social/${parametro}`
      )
      return await fetch(url)
        .then(res => res.json())
        .catch(e => console.log(e))
        .finally(() => setLoading(false))
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
      className='flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-2 w-full'
    >
      <textarea
        className='textarea textarea-xs textarea-bordered w-full border-4 sm:w-[400px]'
        placeholder='Ingresa el listado de ruc separados por comas'
        onChange={e => handleInputChange(e)}
        value={buscar}
        onKeyDown={handleEnter}
      ></textarea>

      <button
        className={`bg-slate-500 text-white rounded shadow-md px-2 py-2 flex justify-center items-center gap-2 transition-all font-semibold hover:scale-105`}
        type='submit'
      >
        Buscar
        <span
          className={`transition ${
            typeof buscar === 'string' && buscar!.length > 0
              ? 'animate-pulse contrast-200'
              : ''
          }`}
        >
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
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </span>
      </button>
    </form>
  )
}

export default SearchInput
