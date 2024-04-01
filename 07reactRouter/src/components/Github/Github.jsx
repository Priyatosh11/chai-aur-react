import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Github() {
    const [data, setData] = useState([])    
    useEffect(() => {
        fetch('https://api.github.com/users/Priyatosh11')
        .then(response => response.json())
            .then(data => {
                setData(data)
            })
            
    }, [])
  return (
    <div className='text-center m-4 bg-gray-500 p-4 text-3xl '>Github Followers: {data.followers}</div>
  )
}

export default Github

