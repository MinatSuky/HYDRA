import img from "./image/logo.png"
import img1 from "./image/logotipo.png"

import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="PADRE">
        <div className="conteiner flex justify-around mt-5">
          <div className="cont1 flex gap-5 w-fit">
            <img src={img} alt="logo" />
            <div className="flex items-center">
              <img className="" src={img1} alt="logotopo" width={80} /> </div>
          </div>
          <div className="cont2 flex items-center">
            <ul className="text-white font-semibold flex gap-10">
              <li className="cursor-pointer hover:text-violet-300 duration-200">ABOUT</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200">SERVICES</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200">TECHNOLOGIES</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200">HOW TO</li>
            </ul>
          </div>
          <div className="cont3 flex items-center gap-7 text-white">
            <button className="px-10 py-4 border-2 rounded-full font-semibold">CONTACT US</button>
            <button className="w-fit font-semibold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-4 rounded-full text-[#302c42]">JOIN HYDRA</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
