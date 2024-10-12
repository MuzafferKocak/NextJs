import GoBack from '@/components/GoBack'
import React from 'react'

const UserDetail = ({params}) => {
    const {userId} = params
  return (
    <div>
        <h1 className='text-2xl text-center'>User Detail</h1>
        <p>user- {userId}</p>
        <GoBack/>
    </div>
  )
}

export default UserDetail