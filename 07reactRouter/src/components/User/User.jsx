import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams();
  return (
    <div className='bg-gray-500 flex text-center items-center justify-center text-zinc-50 text-3xl'>User :{userid}</div>
  )
}

export default User