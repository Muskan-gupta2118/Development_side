import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () =>{

  const [ userData, setUserData] = useState([]);
   const [index, setIndex] = useState(1)

  const getData=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
    console.log(response.data)
   }
    useEffect(function(){
      getData()
    },[index])

    
  let printUserData = <h3 className='text-gray-400 text-x absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading........</h3>

  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return <div>
        <div className='h-40 w-44 bg-white'>
      <img className='h-full object-cover' src={elem.download_url} alt={'elem.author'}/>
      </div>
      <h2>{elem.author}</h2>
      </div>
      })}


     return (
    <div className='bg-blue-950 overflow-auto h-screen p-4 text-white'>
        <h1 className='fixed'>{index}</h1>
        <div className='flex flex-wrap gap-4'>  
          {printUserData}
        </div>
        <div className='flex justify-center gap-6 item-center p-4'>
          <button 
          style={{opacity:index== 1? 0.5:1}} className='bg-amber-400 text-sm cursor-pointer active:scale  text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(index>1){ 
            setIndex(index-1)}
             setUserData([])
          }}>
            previous
            </button>
            <h4>page {index}</h4>
          <button className='bg-amber-400 text-sm cursor-pointer active:scale  text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            setIndex(index+1)
          }}>
            Next
            </button>

        </div>
    </div>
  )
}

export default App
