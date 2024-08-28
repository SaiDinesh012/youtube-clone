import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'



const Head = () => {

  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-3'>
      <div className='flex col-span-1 '>
        <img 
        onClick={()=> toggleMenuHandler()}
        className="h-8 cursor-pointer" alt="menu"
        src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
       <a href='/'></a>
        <img className="h-8 mx-2"
        alt="youtube=logo" src="https://th.bing.com/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?rs=1&pid=ImgDetMain"/>
      </div>
      <div className='col-span-10 text-center'>
        <input className=' p-1 w-1/2 border border-gray-800 rounded-l-full ' type="text"/>
        <button className='p-1  border border-gray-800 rounded-r-full bg-gray-300 text-black-200'>Search</button>
      </div>
      <div className='col-span-1'>
        <img  className="h-8" alt="User" 
        src=" https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQAAAA?rs=1&pid=ImgDetMain"/>
      </div>
    </div>
  )
}

export default Head
