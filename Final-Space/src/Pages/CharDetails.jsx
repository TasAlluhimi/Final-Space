import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function CharDetails() {
    const { id } = useParams()
    const [result, setResult] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(()=>{
        axios.get(`https://finalspaceapi.com/api/v0/character`)
    .then((response)=>{
      console.log(response.data);
      const checkResult = response.data.find((item)=>item.id == id)
      setResult(checkResult);
    })
    .catch((error)=>console.error(error))

    },[])

  return (
    <>
        
        <div className='bg-[rgb(6,13,23)] h-screen'>
      
      <div className='flex flex-wrap items-center justify-center h-full'> 

    {result && result.abilities && result.abilities.length !== 0 ? (
    <div className='w-80 rounded-lg text-center flex flex-col items-center justify-center'>
        <p className='p-2 text-white'>{result.name}</p>
        <img src={result.img_url} className='focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105' alt={result.name} />
        <p className='p-2 text-white'> Statue: {result.status}</p>
        <p className='p-2 text-white'> Species: {result.species}</p>
        <p className='p-2 text-white'> Gender: {result.gender}</p>
        <p className='p-2 text-white'> Origin: {result.origin}</p>

        <p className='p-2 text-white'> Abilities: <li>{result.abilities[0]}</li><li>{result.abilities[1]}</li></p>

        <button
                  className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 mt-5"
                  type="button" onClick={()=>{{navigate('/')}}}
                >
                  Back
        </button>
    </div>

    ) : (
        <div className='w-80 rounded-lg text-center flex flex-col items-center justify-center'>
        <p className='p-2 text-white'>{result.name}</p>
        <img src={result.img_url} className='focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105' alt={result.name} />
        <p className='p-2 text-white'> Statue: {result.status}</p>
        <p className='p-2 text-white'> Species: {result.species}</p>
        <p className='p-2 text-white'> Gender: {result.gender}</p>
        <p className='p-2 text-white'> Origin: {result.origin}</p>
        <p className='p-2 text-white'> There are No Abilities</p>

        <button
                  className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 mt-5"
                  type="button" onClick={()=>{{navigate('/')}}}
                >
                  Back
        </button>

        </div>
    )} 
      </div>
      </div>
      
    </>
  )
}

export default CharDetails