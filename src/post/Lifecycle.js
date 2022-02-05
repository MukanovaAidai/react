import React, { useEffect, useState } from 'react';

const Lifecycle = (props) =>{
  const[data, setPost] = useState([]);
  const[isLoading, setisLoading] = useState(true);
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts ')
     .then((response) => response.json())
     .then((data) => setPost(data))
     setTimeout(() =>{
      setisLoading(false);
     }, 3000)
     
  }, [])
  
  return(
    <div>
      {isLoading ? <div>Loader...</div>:
       <ul>
         {data.map ((item) => {
           return <li key ={item.id}>{item.body}</li>
         })}
       </ul>
        }
    </div>
  )
}


export default Lifecycle;

