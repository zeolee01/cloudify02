import React from "react"
import branding from "../assets/Branding.png"
import SoundToggle from "./sound"
import playbtn from "../assets/playbtn.png"
import checkSign from "../assets/check_sign.png"
import { useNavigate } from "react-router-dom"

export const Page3 = () => {
  const navigate = useNavigate()
  const frame2 = () => {
    navigate("/")
  }
  return (
    <div className="h-screen w-screen block1 p-3 transition duration-150 ease-out block text-white flex flex-col justify-between ">
      {/* Div 1: Top */}
      <div className="top flex items-center justify-between">
        <img
          src={branding}
          alt=""
          style={{ height: "40px", display: "inline" }}
        />
        <div className="absolute right-5">
          <SoundToggle />
        </div>
      </div>

      {/* Div 2: Middle */}
      <div className="middle flex flex-col items-center justify-center ">
        <div className="w-6/12 text-center">
          <div className="flex flex-col items-center">
            <img src={checkSign} alt="" className="pb-4 h-52" />
            <p className="p-4 text-2xl font-medium">
              Hope you learned something new!
            </p>
            <button
              className="bg-yellow-300 text-black font-bold py-2 px-4 rounded flex items-center mb-4 mt-4 rounded-3xl"
              onClick={frame2}
            >
              <img
                src={playbtn}
                alt=""
                className="inline p-1 h-6 w-6 hover:h-7 hover:w-7  transform hover:rotate-180 transition-transform duration-8000"
              />
              <span className="pl-2">Let’s play</span>
            </button>
          </div>
        </div>
      </div>

      {/* Div 3: End */}
      <div className="end flex items-end">
        <p>
          Powered by <span>CLOUDIFYAPPS</span>
        </p>
      </div>
    </div>
  )
}

export default Page3
