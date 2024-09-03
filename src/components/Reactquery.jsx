import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Navbar from './Nav'

const Reactquery = () => {

const {data,isLoading,isError,error}=useQuery({
    queryKey:['posts'],
    queryFn:()=>{
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }
})
if (isLoading) {
    return <div>Page is loading...</div>
}

if (isError) {
    return <div>{error.message}</div>
}

  return (
  <>
    <h2>With Using React-Query</h2><Navbar/>
    <div className='d-flex flex-wrap justify-content-center'>
   
    {data?.data.map(post => ( 
        <div className="card" style={{ width: "18rem", margin: "10px" }} key={post.id}>
            <div className="card-body">
                <h5 className="card-title">{`${post.title.slice(0, 20)}...`}</h5>
            </div>
        </div>
    ))}
</div>
  </>
  )
}

export default Reactquery
