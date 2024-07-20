import img from "../src/image/logo.png"
import img1 from "../src/image/logotipo.png"
import img2 from "../src/image/woman.png"


import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="PADRE">
        <div className="conteiner-MENU flex justify-around mt-5">
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
        <div className="Conteiener-SECCION-1 flex mt-44 mx-10">
          <div className="cont4 w-[60%] flex flex-col justify-center gap-10 ">
            <div className="tituloPrincipal">
              <p className="font-bold title-perfi text-white"><span className="title-perfi2 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] BG">Dive</span> Into The Depths</p>
              <p className="font-bold title-perfi text-white">Of <span className="title-perfi2 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] BG">Virtual Reality</span></p>
            </div>
            <div className="cont5 ">
              <p className="text-white title-perfi3 font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
            </div>
            <div className="cont6 flex items-center gap-10">
              <button className="w-fit font-semibold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-3 rounded-full text-[#302c42]">BUILD YOUR WORLD</button>
              <svg className="xx" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
            </div>
          </div>

          <div className="cont7 w-[40%] flex justify-end relative mx-10">
            <img className="margen" src={img2} alt="" width={650} />
            <svg class="absolute -z-10 w-[70%] h-[150%] left-[30%] xx" xmlns="http://www.w3.org/2000/svg" width="41" height="67"
              viewBox="0 0 416 675" fill="none">
              <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
                stroke="url(#paint0_linear_1_23)" stroke-width="6" />
              <defs>
                <linearGradient id="paint0_linear_1_23" x1="365.5" y1="28" x2="110" y2="594" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#343045" />
                  <stop offset="0.276042" stop-color="#8176AF" />
                  <stop offset="0.739583" stop-color="#C0B7E8" />
                  <stop offset="1" stop-color="#343045" />
                </linearGradient>
              </defs>
            </svg>
            <svg class="absolute -z-10 top-[-300px] w-[70%] h-[180%] xx" xmlns="http://www.w3.org/2000/svg" width="383" height="846"
              viewBox="0 0 383 846" fill="none">
              <path
                d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
                stroke="url(#paint0_linear_1_24)" stroke-width="6" />
              <defs>
                <linearGradient id="paint0_linear_1_24" x1="16.5" y1="39.5" x2="363" y2="814"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.0104167" stop-color="#343045" />
                  <stop offset="0.229167" stop-color="#C0B7E8" />
                  <stop offset="0.776042" stop-color="#8176AF" />
                  <stop offset="1" stop-color="#343045" />
                </linearGradient>
              </defs>
            </svg>
            <svg class="absolute w-[90%] h-[120%] -z-10 xx" xmlns="http://www.w3.org/2000/svg" width="736" height="423"
          viewBox="0 0 736 423" fill="none">
          <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_2_33)"
            stroke-width="6" />
          <defs>
            <linearGradient id="paint0_linear_2_33" x1="700.5" y1="-3.99998" x2="14.5" y2="361"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#343045" />
              <stop offset="0.213542" stop-color="#C0B7E8" />
              <stop offset="0.71875" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
