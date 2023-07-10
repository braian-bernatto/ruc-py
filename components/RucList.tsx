import { Ruc } from '@/types'
import React from 'react'
import CopyClipboard from './CopyClipboard'

interface Props {
  listado: Ruc[]
}

const RucList: React.FC<Props> = ({ listado }) => {
  return (
    <>
      <div>
        <CopyClipboard />
      </div>
      <div className='overflow-x-auto bg-white rounded shadow max-w-2xl w-full max-h-[400px] sm:max-h-[700px]'>
        <table
          className='table table-zebra table-pin-rows text-xs'
          id='tableData'
        >
          {/* head */}
          <thead>
            <tr className='shadow'>
              <th>RUC</th>
              <th>RAZÓN SOCIAL</th>
            </tr>
          </thead>
          <tbody>
            {listado.map(dato => (
              <tr key={dato.ruc_id}>
                <td>{`${dato.ruc_numero}-${dato.ruc_dv}`}</td>
                <td>{dato.ruc_nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default RucList
