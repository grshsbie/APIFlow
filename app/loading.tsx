import React from 'react'
const Loading = ()=>{
  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce"></div>
      </div>
      <div className="text-blue-600">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}
export default Loading