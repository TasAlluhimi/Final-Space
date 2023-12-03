import React from 'react'
import f from '../assets/fc.jpeg'
import { useNavigate } from 'react-router-dom'

function Error() {

  const navigate = useNavigate()
  return (
    <>
      <div className='h-screen bg-cover bg-center flex flex-col items-center justify-center' style={{backgroundImage: `url(${f})`}}>
      <p className='text-white text-4xl'>404 - Page not found</p>
      <button
                  className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 mt-5"
                  type="button" onClick={()=>{{navigate('/')}}}
                >
                  Back
        </button>
    </div>
    </>
  )
}

export default Error