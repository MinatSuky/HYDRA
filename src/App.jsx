import img from "../src/image/logo.png"
import img1 from "../src/image/logotipo.png"
import img2 from "../src/image/woman.png"
import img3 from "../src/image/Location-Icon.png"
import img4 from "../src/image/phone-call.png"
import img5 from "../src/image/mail.png"
import img6 from "../src/image/flecha larga.png"
import img7 from "../src/image/game.png"
import img8 from "../src/image/Vector 7.png"
import img9 from "../src/image/Vector 8.png"
import img10 from "../src/image/Vector 4.png"
import img11 from "../src/image/Vector 1.png"
import img12 from "../src/image/gamer 1.png"
import img14 from "../src/image/gamer 2.png"
import img15 from "../src/image/gamer 3.png"
import img16 from "../src/image/gamer 4.png"
import img13 from "../src/image/vec.png"
import img17 from "../src/image/woman2.png"
import img18 from "../src/image/tech1.png"
import img19 from "../src/image/tech2.png"
import img20 from "../src/image/tech3.png"
import img21 from "../src/image/tech4.png"
import img22 from "../src/image/Vector 14.png"
import img23 from "../src/image/01.png"
import img24 from "../src/image/02.png"
import img25 from "../src/image/03.png"
import img26 from "../src/image/04.png"
import img27 from "../src/image/Ellipse 8.png"
import img28 from "../src/image/Ellipse 7.png"
import img29 from "../src/image/Vector 15.png"
import img30 from "../src/image/Vector 16.png"
import img31 from "../src/image/Vector 17.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";


import './App.css'

function App() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1362,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 872,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  var settingss = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  var settingsss = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1098,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  var settingssss = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 704,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };


  return (
    <>
      <div className="PADRE">
        <div className="h-[3vh] xx"></div>
        <div className="conteiner-MENU relative flex justify-around">
          <div className="xxx w-full">
            <div className="navbar bg-[#302C42] ">
              <div className="navbar-start">
                <div className="drawer drawer-end relative z-30">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#A6ADBB" d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" /></svg></label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      {/* Sidebar content here */}
                      <li className="cursor-pointer hover:text-violet-300 duration-200"><a href="">ABOUT</a></li>
                      <li className="cursor-pointer hover:text-violet-300 duration-200"><a href="">SERVICES</a></li>
                      <li className="cursor-pointer hover:text-violet-300 duration-200"><a href="">TECHNOLOGIES</a></li>
                      <li className="cursor-pointer hover:text-violet-300 duration-200"><a href="">HOW TO</a></li>
                      <li><button className="w-fit mt-10 font-semibold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-4 rounded-xl text-[#302c42] cursor-pointer">JOIN HYDRA</button></li>
                      <li><button className="px-10 mt-5 py-4 border-2 rounded-xl font-semibold relative z-20">CONTACT US</button></li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className="navbar-center">

              </div>
              <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="cont1 flex gap-5 w-fit">
            <img src={img} alt="logo" />
            <div className="flex items-center">
              <img className="" src={img1} alt="logotopo" width={80} /> </div>
          </div>
          <div className="cont2 flex items-center">
            <ul className="text-white font-semibold flex gap-10">
              <li className="cursor-pointer hover:text-violet-300 duration-200 linear">ABOUT</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200 linear">SERVICES</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200 linear">TECHNOLOGIES</li>
              <li className="cursor-pointer hover:text-violet-300 duration-200 linear">HOW TO</li>
            </ul>
          </div>
          <div className="cont3 flex items-center gap-7 text-white">
            <button className="px-10 py-4 border-2 rounded-full font-semibold relative z-20 bg-[#302C42]">CONTACT US</button>
            <button className="w-fit font-semibold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-4 rounded-full text-[#302c42] cursor-pointer  hover:shadow-lg hover:shadow-[#8176AF] duration-200 z-30">JOIN HYDRA</button>
          </div>
        </div>
        <div className="Conteiener-SECCION-1 flex justify-around mt-44 mx-10">
          <div className="cont4 flex flex-col justify-center gap-10 w-[40%]">
            <div className="flex justify-center">
              <img className="xxx" src={img1} alt="logotopo" width={80} />
            </div>
            <div className="tituloPrincipal">
              <p className="font-bold title-perfi text-white  text-Animaction"><span className="title-perfi2 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] BG">Dive</span> Into The Depths</p>
              <p className="font-bold title-perfi text-white">Of <span className="title-perfi2 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] BG">Virtual Reality</span></p>
            </div>
            <img className="absolute z-10 top-72 left-0" src={img10} alt="fondo" /> {/*  figura de fondo */}
            <img className="absolute z-10 top-20 left-0 xxx" src={img8} alt="fondo" /> {/*  figura de fondo */}
            <div className="cont5 ">
              <p className="text-white title-perfi3 font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
                nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
            </div>
            <div className="cont6 flex items-center gap-10">
              <button className="w-fit font-semibold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-3 rounded-full text-[#302c42] hover:shadow-lg hover:shadow-[#8176AF] duration-200">BUILD YOUR WORLD</button>
              <svg className="xx" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
            </div>
          </div>

          <div className="cont7 flex justify-end relative mx-10">
            <img className="margen z-20" src={img2} alt="" width={650} />
            <svg class="absolute z-10 w-[70%] h-[150%] left-[30%] xx" xmlns="http://www.w3.org/2000/svg" width="41" height="67"
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
            <svg class="absolute z-10 top-[-300px] w-[70%] h-[180%] xx" xmlns="http://www.w3.org/2000/svg" width="383" height="846"
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
            <svg class="absolute w-[100%] z-10 xx" xmlns="http://www.w3.org/2000/svg" width="936" height="923"
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
        <div className="container-SECCION-2 flex justify-center mx-20 p-14 rounded-full mt-36 z-20 relative shadow-2xl">
          <Slider className="w-[95%]" {...settings}>
            <div>
              <div className="cont8 flex gap-4 items-center justify-center">

                <img src={img3} alt="ubicacion" />

                <div>
                  <p className="text-white textR font-bold"> Pay Us a Visit </p>
                  <p className="text-white textR2 font-light"> Union St, Seattle, WA 98101. </p>
                </div>
              </div>
            </div>
            <div>
              <div className="cont9 flex gap-4 items-center justify-center">
                <div>
                  <img src={img4} alt="telefono" />
                </div>
                <div>
                  <p className="text-white textR font-bold">Give Us a Call</p>
                  <p className="text-white textR2 font-light">(110) 1111-1010</p>
                </div>
              </div>
            </div>
            <div>
              <div className="cont10 gap-4 flex items-center justify-center">
                <div>
                  <img src={img5} alt="email" />
                </div>
                <div>
                  <p className="text-white textR font-bold">Send Us a Message</p>
                  <p className="text-white textR2 font-light">Hydra@gmail.com</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="conteiner-SECCION-3  mt-20 mx-20 relative z-20">
          <div className="conteiner flex w-[100%]">
            <div className="cont11">
              <p className="textR3 text-white text-centerr font-bold">INTRODUCTION</p>
              <div className="flex items-center gap-5 con">
                <p className="textR3 text-white font-light">TO HYDRA VR</p>
                <img className="xx" src={img6} alt="" />
              </div>
            </div>
            <div className="cont12 w-[50%] flex items-center ">
              <p className="text-xl text-white font-light">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
              </p>
            </div>
          </div>
          <img className="absolute w-[100%] z-10 top-72 left-0 xx" src={img8} alt="fondo" /> {/*  figura de fondo */}
          <img className="absolute w-[100%] z-10 start-0 bottom-48 left-0 xx" src={img9} alt="fondo" /> {/*  figura de fondo */}
          <img className="absolute -z-10  bottom-5 right-0 xxx opacity-25" src={img11} alt="fondo" /> {/*  figura de fondo */}
          <div className="conteiner flex mt-20">
            <div className="cont13 flex justify-center con w-[50%] z-20">
              <img src={img7} alt="" />
            </div>
            <div className="cont14 w-[50%] mt-5">
              <p className="textR3 text-white text-centerr font-bold">ABOUT</p>
              <p className="textR3 text-white text-centerr font-light">HYDRA VR</p>
              <p className="mt-10 title-perfi3 text-white font-light ">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.
              </p>
              <div className="flex con">
                <button className="w-fit shadow-2xl mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-10 py-4 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200 z-30">LET’S GET IN TOUCH</button>
              </div>
            </div>
          </div>
          <div className="conteiner flex w-[100%] mt-36">
            <div className="cont11">
              <p className="textR3 text-white text-centerr font-bold">WHY BUILD</p>
              <div className="flex items-center gap-5 con">
                <p className="textR3  text-white font-light">WITH HYDRA?</p>
                <img className="xx" src={img6} alt="" />
              </div>
            </div>
            <div className="cont12 w-[50%] flex items-center ">
              <p className="text-xl text-white font-light">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="conteiner-SECCION-3 flex justify-center mt-20 mx-10">
          <Slider className="w-[97%]" {...settingss}>
            <div className="cont15 w-[25%] px-14 py-12 rounded-[40px] GRADI">
              <div className="flex justify-center">
                <img className="border-[14px] border-[#1e1c28] rounded-full w-full" src={img12} alt="abatar" />
              </div>
              <div>
                <p className="text-center text-white font-bold text-2xl mt-10">SIMULATION</p>
                <div className="flex justify-center">
                  <img className="mt-2 w-[80%]" src={img13} alt="linea" />
                </div>
              </div>
              <p className="textR4 mt-10 text-center text-white font-light">Vitae sapien pellentesque  habitant morbi <br />  nunc. Viverra  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet vitae.</p>
              <div className="flex justify-center">
                <button className="spacee textR4 mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-14 py-3 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200">TRY IT NOW</button>
              </div>
            </div>
            <div className="cont15 w-[25%] px-14 py-12 rounded-[40px] GRADI">
              <div className="flex justify-center">
                <img className="border-[14px] border-[#1e1c28] rounded-full w-full" src={img14} alt="abatar" />
              </div>
              <div>
                <p className="text-center text-white font-bold text-2xl mt-10">EDUCATION</p>
                <div className="flex justify-center">
                  <img className="mt-2 w-[80%]" src={img13} alt="linea" />
                </div>
              </div>
              <p className="textR4 mt-10 text-center text-white font-light">Vitae sapien pellentesque  habitant morbi <br />  nunc. Viverra  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet vitae.</p>
              <div className="flex justify-center">
                <button className="spacee textR4 mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-14 py-3 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200">TRY IT NOW</button>
              </div>
            </div>
            <div className="cont15 w-[25%] px-14 py-12 rounded-[40px] GRADI">
              <div className="flex justify-center">
                <img className="border-[14px] border-[#1e1c28] rounded-full w-full" src={img15} alt="abatar" />
              </div>
              <div>
                <p className="text-center text-white font-bold text-2xl mt-10">SELF-CARE</p>
                <div className="flex justify-center">
                  <img className="mt-2 w-[80%]" src={img13} alt="linea" />
                </div>
              </div>
              <p className="textR4 mt-10 text-center text-white font-light">Vitae sapien pellentesque  habitant morbi <br />  nunc. Viverra  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet vitae.</p>
              <div className="flex justify-center">
                <button className="spacee textR4 mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-14 py-3 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200">TRY IT NOW</button>
              </div>
            </div>
            <div className="cont15 w-[25%] px-14 py-12 rounded-[40px] GRADI">
              <div className="flex justify-center">
                <img className="border-[14px] border-[#1e1c28] rounded-full w-full" src={img16} alt="abatar" />
              </div>
              <div>
                <p className="text-center text-white font-bold text-2xl mt-10">OUTDOOR</p>
                <div className="flex justify-center">
                  <img className="mt-2 w-[80%]" src={img13} alt="linea" />
                </div>
              </div>
              <p className="textR4 mt-10 text-center text-white font-light">Vitae sapien pellentesque  habitant morbi <br />  nunc. Viverra  aliquet porttitor rhoncus <br /> libero justo laoreet sit amet vitae.</p>
              <div className="flex justify-center">
                <button className="spacee textR4 mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-14 py-3 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200">TRY IT NOW</button>
              </div>
            </div>
          </Slider>
        </div>
        <div className="conteiner-SECCION-4 mx-20 mt-40 relative">
          <img className="absolute right-22" src={img22} alt="fondo" /> {/*  figura de fondo */}
          <div className="woman2 relative flex justify-center items-center hover:scale-[1.01] duration-500 ease-in-out">
            <img className="w-full rounded-full shadow-2xl " src={img17} alt="" />
            <div className="absolute">
              <p className="textR5 text-white text-centerr font-bold text-center white-space">TECHNOLOGIES & HARDWARE</p>
              <p className="textR6  text-white font-light text-center white-space">USED BY HYDRA VR.</p>
            </div>
          </div>
        </div>
        <div className="conteiner-SECCION-5 mx-20 mt-20">
          <div className="flex justify-center">
            <Slider className="w-[95%] items-center" {...settingsss}>
              <div>
                <figure className="flex justify-center hover:scale-105 duration-200 ease-in-out">
                  <img className="w-[70%]" src={img18} alt="marcas" />
                </figure>
              </div>
              <div>
                <figure className="flex justify-center hover:scale-105 duration-200 ease-in-out">
                  <img src={img19} alt="marcas" />
                </figure>
              </div>
              <div>
                <figure className="flex justify-center hover:scale-105 duration-200 ease-in-out">
                  <img src={img20} alt="marcas" />
                </figure>
              </div>
              <div>
                <figure className="flex justify-center hover:scale-105 duration-200 ease-in-out">
                  <img src={img21} alt="marcas" />
                </figure>
              </div>
            </Slider>
          </div>
          <div className="conteiner flex w-[100%] mt-10">
            <div className="cont11">
              <p className="textR3 text-white text-centerr font-bold">HOW WE BUILD</p>
              <div className="flex items-center gap-5 con">
                <p className="textR3 text-white font-light">WITH HYDRA VR?</p>
                <img className="xx" src={img6} alt="" />
              </div>
            </div>
            <div className="cont12 w-[50%] flex items-center ">
              <p className="text-xl text-white font-light">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="conteiner-SECCION-6 mt-32">
          <img className="absolute w-full" src={img29} alt="fondo" /> {/*  figura de fondo */}
          <div className="mx-10 flex justify-evenly">
            <Slider className="w-[97%] items-center" {...settingssss}>
              <div>
                <div className="contenedor flex flex-col items-center">
                  <div className="w-[85%] hover:scale-105 duration-200 ease-in-out rounded-full flex justify-center items-center mb-2 relative">
                    <img className="absolute z-10" src={img27} alt="fondo" />
                    <img className="absolute -z-0" src={img28} alt="fondo" />
                    <img className="p-20 z-20 w-[225px]" src={img23} alt="redondel" />
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
                    <p className="white-space text-2xl font-bold text-white">3D Concepcion</p>
                  </div>
                  <p className="white-space text-2xl font-bold text-white">& Design</p>
                </div>
              </div>
              <div>
                <div className="contenedor flex flex-col items-center">
                  <div className="w-[85%] hover:scale-105 duration-200 ease-in-out rounded-full flex justify-center items-center mb-2 relative">
                    <img className="absolute z-10" src={img27} alt="fondo" />
                    <img className="absolute -z-0" src={img28} alt="fondo" />
                    <img className="p-20 z-20 w-[240px]" src={img24} alt="redondel" />
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
                    <p className="white-space text-2xl font-bold text-white">Interaction</p>
                  </div>
                  <p className="white-space text-2xl font-bold text-white">Design</p>
                </div>
              </div>
              <div>
                <div className="contenedor flex flex-col items-center">
                  <div className="w-[85%] hover:scale-105 duration-200 ease-in-out rounded-full flex justify-center items-center mb-2 relative">
                    <img className="absolute z-10" src={img27} alt="fondo" />
                    <img className="absolute -z-0" src={img28} alt="fondo" />
                    <img className="p-20 z-20 w-[240px]" src={img25} alt="redondel" />
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
                    <p className="white-space text-2xl font-bold text-white">VR World</p>
                  </div>
                  <p className="white-space text-2xl font-bold text-white">User Testing</p>
                </div>
              </div>
              <div>
                <div className="contenedor flex flex-col items-center">
                  <div className="w-[85%] hover:scale-105 duration-200 ease-in-out rounded-full flex justify-center items-center mb-2 relative">
                    <img className="absolute z-10" src={img27} alt="fondo" />
                    <img className="absolute -z-0" src={img28} alt="fondo" />
                    <img className="p-20 z-20 w-[240px]" src={img26} alt="redondel" />
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#C0B7E8" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
                    <p className="white-space text-2xl font-bold text-white">Hydra VR</p>
                  </div>
                  <p className="white-space text-2xl font-bold text-white">Deploy</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="conteiner-SECCION-7 mt-32 mx-28 GRADI rounded-[55px] shadow-2xl">
          <div className="contenedorr mx-36">
            <div className="flex flex-col items-center">
              <p className="textR3 text-white text-centerr font-bold mt-10 opacity-85 white-space">JOIN HYDRA</p>
              <img className="mt-5" src={img30} alt="linea" />
              <p className="textR7 text-white font-light mt-5 text-center white-space">Let’s Build <br /> Your VR Experience</p>
            </div>
            <div className="cont17 flex justify-center w-full gap-3 mt-10">
              <input className="w-full bg-transparent border-2 p-6 rounded-full" type="text" name="nombre" id="nombre" placeholder="First Name" />
              <input className="w-full bg-transparent border-2 p-6 rounded-full" type="text" name="apellido" id="apellido" placeholder="last Name" />
            </div>
            <div className="cont17 flex justify-center w-full gap-3 mt-8">
              <input className="w-full bg-transparent border-2 p-6 rounded-full" type="text" name="Email" id="Email" placeholder="Email" />
              <input className="w-full bg-transparent border-2 p-6 rounded-full" type="text" name="Phone Number" id="Phone Number" placeholder="Phone Number" />
            </div>
            <div>

              <input className="w-full mt-8 bg-transparent border-2 p-6 rounded-full" type="text" name="Subject" id="Subject" placeholder="Subject" />
              <input className="w-full mt-8 pb-40 bg-transparent border-2 p-6 rounded-[40px]" type="text" name="Subject" id="Subject" placeholder="Subject" />

              <div className="flex justify-center">
                <button className="spacee textR4  mb-20 mt-10 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-14 py-3 rounded-full text-[#302c42] cursor-pointer hover:shadow-lg hover:shadow-[#8176AF] duration-200">SEND TO HYDRA</button>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-SECCION-8 mt-20">
         <div className="flex justify-center">
         <img src={img31} alt="" />
         </div>
          <footer className="footer footer-center text-base-content p-4 mt-10">
            <aside>
              <p className="text-white font-bold">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
            </aside>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
