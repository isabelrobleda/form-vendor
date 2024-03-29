import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='flex items-center py-7 bg-white justify-stretch md:pl-80 '>
        <img src="../public/logo.png" alt="" className='h-20  md:pl-80 md:ml-16'/>
        <ul className='flex p-4 text-slate-700 '>
           <Link to={"/"}><li className='mr-5'>Home</li></Link> 
           <Link to={"/"}> <li className='mr-5'>Comprar</li></Link>
           <Link to={"/"}><li className='mr-5 underline'>Vender</li></Link>
           <Link to={"/"}><li className='mr-5'>Sustentabilidad</li></Link>
           <Link to={"/"}> <li className='mr-5'>Conócenos</li></Link>
        </ul>
    </div>
  )
}

export default Header