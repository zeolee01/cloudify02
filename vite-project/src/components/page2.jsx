import React from "react"
import branding from "../assets/Branding.png"
import SoundToggle from "./sound"
import letgobtn from "../assets/letgo.png"
import Card from "./card"

export const Page2 = () => {
  const frame2 = () => {}
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
        {/* card element add */}
        <Card />
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

export default Page2
