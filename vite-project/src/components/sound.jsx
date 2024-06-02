import React, { useState, useRef } from "react"
import soundOnIcon from "../assets/soundon.webp"
import soundOffIcon from "../assets/soundoff.webp"
import soundFile from "../assets/sound.mp3"

const SoundToggle = () => {
  const [isSoundOn, setIsSoundOn] = useState(true)
  const audioRef = useRef(new Audio(soundFile))

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn)
    if (isSoundOn) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={toggleSound} className="focus:outline-none">
        <img
          src={isSoundOn ? soundOnIcon : soundOffIcon}
          alt="Sound Toggle"
          className="h-8 w-8 filter invert"
        />
      </button>
    </div>
  )
}

export default SoundToggle
