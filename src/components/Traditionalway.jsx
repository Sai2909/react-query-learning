import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Nav';

const Traditionalway = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

   
    const fetchPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>Page is loading...</div>
    }

    if (isError) {
        return <div>Error has occurred...</div>
    }
    return (
       <>
        <h2>Without Using React-Query</h2><Navbar/>
        <div className='d-flex flex-wrap justify-content-center'>
            {posts.map(post => (
                <div className="card " style={{ width: "18rem", margin: "10px" }} key={post.id} >
                    <div className="card-body">
                        <h5 className="card-title">{`${post.title.slice(1, 20)}...`}</h5>
                    </div>
                </div>
            ))}
        </div>
       </>
    );
};

export default Traditionalway;
