import React from "react"
import branding from "../assets/Branding.png"
import SoundToggle from "./sound"
import letgobtn from "../assets/letgo.png"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  const frame2 = () => {
    navigate("/page2")
  }
  return (
    <div className="h-screen w-screen block1 p-3 transition duration-150 ease-out block text-white flex flex-col justify-between">
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
      <div className="middle flex flex-col items-center justify-center">
        <div className="w-6/12 text-center">
          <h1 className="text-6xl mb-4 font-bold">
            Addition and Subtraction Facts within 20
          </h1>
          <p className="text-2xl mb-4">
            Test your knowledge with the following questions, tap a card to flip
            it and uncover the answer, good luck!
          </p>
          <div className="flex justify-center">
            <button
              className="bg-yellow-300 text-black font-bold py-2 px-4 rounded flex items-center rounded-3xl"
              onClick={frame2}
            >
              <img
                src={letgobtn}
                alt=""
                className="inline p-1 h-4 w-4 outline-none ring-2 ring-black rounded-full hover:h-6 hover:w-6 hover:ring-2 transform hover:rotate-180 transition-transform duration-8000"
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

export default Home
