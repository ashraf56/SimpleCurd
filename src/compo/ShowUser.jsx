import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ShowUser = () => {
    let alluser=useLoaderData();
    let [users,setuser]=useState(alluser)
   let deletdata=(_id)=>{
   
    fetch(`http://localhost:4000/user/${_id}`,{
        method:'DELETE'
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data);
        if (data.deletedCount>0) {
            alert('delete')
            let remain=users.filter(use=>use._id !== _id);
            setuser(remain)
        }
    })
   }
    return (
        <div>
            <h1 className='text-center'>{users.length}</h1>
{
    users.map(user =>
    <div className='card w-96  mx-auto bg-base-100 shadow-xl' key={user._id}>
        <div className='card-body'>
  <p>{user.name}</p>
  <p>{user._id}</p>
 <Link to={`/update/${user._id}`}><button  className='btn'>update</button></Link>
  <button onClick={()=> deletdata(user._id)} className='btn'>X</button>
        </div>
       

    </div>
    
    )
}

        </div>
    );
};

export default ShowUser;