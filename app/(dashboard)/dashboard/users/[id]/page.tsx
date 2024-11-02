import React from 'react'


const page = ({params} : {params: {id: string }})=>{
  const { id } = params;
  return (
    <h1 className="text-2xl font-bold text-gray-800 p-4">The is a UserID: {id}</h1>
  )
}

export default page