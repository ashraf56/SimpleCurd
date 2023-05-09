import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    let loadData =useLoaderData();
    let formdata1=e=>{
        let f=e.target;
        e.preventDefault();
        let name = f.name.value;
        let email = f.email.value;
        let Updateuser={name ,email}
        console.log(Updateuser);

        fetch(`http://localhost:4000/user/${loadData._id}`,{
method:'PUT',
headers:{
    'content-type': 'application/json'
},
body:JSON.stringify(Updateuser)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount>0) {
                alert('Data Updated')
            }
        })
      
     
      }
    return (
        <div className='hero-content flex-col lg:flex-row-reverse'>
            profile{loadData.name}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
      <form className="card-body" onSubmit={formdata1}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" defaultValue={loadData?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name="name" defaultValue={loadData?.name} className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">update</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Profile;