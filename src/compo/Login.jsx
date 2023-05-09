import React from 'react';

const Login = () => {
    let formdata=e=>{
        let f=e.target;
        e.preventDefault();
        let name = f.name.value;
        let email = f.email.value;
        let user={name ,email}
        console.log(user);
        fetch('http://localhost:4000/user',{
          method:'POST',
          headers:{
            'content-type':"application/json",
          },
          body:JSON.stringify(user)
        }).then(res=> res.json())
        .then(data=>{
          console.log(data);
          if (data.insertedId) {
            alert('data added to db')
      
          f.reset();
          }
        })
      }
    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
      <form className="card-body" onSubmit={formdata}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;