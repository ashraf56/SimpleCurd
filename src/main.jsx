import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowUser from './compo/ShowUser.jsx';
import Login from './compo/Login.jsx';
import Profile from './compo/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
path:'/',
element:<ShowUser></ShowUser>,
loader: ()=> fetch('http://localhost:4000/user')
} ,
{
path:'/login',
element:<Login/>
      },
{
path:'/update/:id',
element:<Profile/>,
loader: ({params})=> fetch(`http://localhost:4000/user/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
