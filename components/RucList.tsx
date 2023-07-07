import { Ruc } from '@/types'
import React from 'react'

interface Props {
  listado: Ruc[]
}

const RucList: React.FC<Props> = ({ listado }) => {
  return (
    <div className='overflow-x-auto bg-white rounded shadow max-w-2xl w-full'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr className='shadow'>
            <th>RUC</th>
            <th>RAZÓN SOCIAL</th>
          </tr>
        </thead>
        <tbody>
          {listado.map((dato, idx) => (
            <tr key={idx}>
              <td>{`${dato.ci}-${dato.dv}`}</td>
              <td>{dato.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RucList
