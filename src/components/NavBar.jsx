import React, { useState } from 'react'
import logoStartOK from '../assets2/logoStartOK.svg'
import menuIcon from '../assets2/menuIcon.svg'
import closeIcon from '../assets2/closeIcon.svg'


function NavBar() {

  const [toggle, setToggle] = useState(false)


  return (
    <section id="nav-bar">
        <nav className="w-full flex py-6 justify-between items-center  navbar ">
            <img src={logoStartOK} alt="Startupz" className = "w-[200px] h-[48px]"/>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
              <li className="font-circular font-normal cursor-pointer text-lg text-primaryText md:mr-10"><a href="#">Startups</a></li>
              <li className="font-circular font-normal cursor-pointer text-lg text-primaryText mr-10"><a href="#">Contact</a></li>
              <li className="font-circular font-normal cursor-pointer text-lg  sm:py-2 px-8 border border-solid border-[#46B8C8] rounded-full text-[#46B8C8] "><a href="#">Work with us!</a></li>
            </ul>
            

            {/* /* MOBILE MENU*/ }

            <div className="md:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? closeIcon : menuIcon } alt ="menu" className="w-[24px] h-[24px] object-contain" onClick={() => setToggle((prev) => !prev)} />
              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-bgSecondary absolute top-16 right-0  my-2 min-w-[70%]  justify-end items-start h-full rounded-xl sidebar`}>
                <ul className="list-none flex flex-col text-end w-full ">
                <li className="font-circular text-primaryText font-normal cursor-pointer text-lg  mb-2 "><a href="#">Startups</a></li>
                <hr className='w-full mb-4 border-2 border-primaryText'></hr>             
                <li className="font-circular text-primaryText font-normal cursor-pointer text-lg mb-2 "><a href="#">Contact</a></li>
                <hr className='w-full mb-4 border-2 border-primaryText'></hr>
                <li className="font-circular text-primaryText font-normal cursor-pointer text-lg mb-2 "><a href="#">Work with us!</a></li>
                <hr className='w-full mb-4 border-2 border-primaryText '></hr>
              </ul>
              


              </div>
            </div>

        </nav>
    </section>
  )
}

export default NavBar
