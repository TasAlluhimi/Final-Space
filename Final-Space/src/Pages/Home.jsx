import React from 'react'
import axios from 'axios'
import f from '../assets/fc.jpeg'
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = React.useState([]);

  React.useEffect(()=>{
    
    axios.get(`https://finalspaceapi.com/api/v0/character`)
    .then((response)=>{
      // console.log(response.data);
      setData(response.data);
    })
    .catch((error)=>error)
  },[])


  return (
    <>

        <div className='h-screen bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url(${f})`}}>
      <img src="https://finalspaceapi.com/img/logo.png" alt="" />
    </div>


      <div className='bg-[rgb(6,13,23)]'>
      
      <p className='text-center text-3xl p-10 text-white'>Final Space Characters</p>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {data.map((item)=>(
          <div key={item.id} className='w-80 rounded-lg text-center flex flex-col items-center justify-center'>

            <Link to={`/${item.id}`}><img src={item.img_url} className='focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105' alt={item.name} /></Link>
          </div>
        ))}
      </div>
      </div>

    </>
  )
}

export default Home