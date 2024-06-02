// import React, { useState } from "react"
// import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
// import sl1 from "../assets/sl1.png"
// import sl2 from "../assets/sl2.png"
// import sl3 from "../assets/sl3.png"
// import sl4 from "../assets/sl4.png"
// import sl5 from "../assets/sl5.png"
// import sl6 from "../assets/sl6.png"
// import sl7 from "../assets/sl7.png"
// import sl8 from "../assets/sl8.png"
// import sl9 from "../assets/sl9.png"
// import sl10 from "../assets/sl10.png"

// const items = [
//   {
//     id: 1,
//     image: sl1,
//     description: "Eve has 16 apples now (9 + 7 = 16)",
//     title: "Slide 1",
//     backContent:
//       "Eve has 9 apples and she was given 7 more. How many apples does she have now? ",
//   },
//   {
//     id: 2,
//     image: sl2,
//     title: "Slide 2",
//     description: "Lucas has 9 candies left (14 - 5 = 9)",
//     backContent:
//       "Lucas had 14 candies. He ate 5. How many candies does he have left? ",
//   },
//   {
//     id: 3,
//     image: sl3,
//     title: "Slide 3",
//     description: "There are 5 cats left in the room (11 - 6 = 5)",
//     backContent:
//       "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
//   },
//   {
//     id: 4,
//     image: sl4,
//     title: "Slide 4",
//     description: "Tom now has 14 pencils (8 + 6 = 14)",
//     backContent:
//       "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now? ",
//   },
//   {
//     id: 5,
//     image: sl5,
//     title: "Slide 5",
//     description: "Maria has 9 cupcakes left (20 - 11 = 9)",
//     backContent:
//       "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left? ",
//   },
//   {
//     id: 6,
//     image: sl6,
//     title: "Slide 6",
//     description: "There are 12 goldfish in the aquarium now (7+5=12)",
//     backContent:
//       "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
//   },
//   {
//     id: 7,
//     image: sl7,
//     title: "Slide 7",
//     description: "There are 16 oranges in total (10 + 6 = 16)",
//     backContent:
//       "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total? ",
//   },
//   {
//     id: 8,
//     image: sl8,
//     title: "Slide 8",
//     description: "There are 11 apples left in the box (18-7=11)",
//     backContent:
//       "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
//   },
//   {
//     id: 9,
//     image: sl9,
//     title: "Slide 9",
//     description: "Rita has 5 balloons now (12-7=5)",
//     backContent:
//       "Lisa had 12 balloons, and 7 flew away. How many balloons does Rita have now?",
//   },
//   {
//     id: 10,
//     image: sl10,
//     title: "Slide 10",
//     description: "Michael has $20 now (15+5=20)",
//     backContent:
//       "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
//   },
// ]

// const Carousal = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [flipped, setFlipped] = useState(false)

//   const prevSlide = () => {
//     const index = currentIndex === 0 ? navigate("/") : currentIndex - 1
//     setCurrentIndex(index)
//     setFlipped(false)
//   }

//   const nextSlide = () => {
//     const index =
//       currentIndex === items.length - 1 ? navigate("/page3") : currentIndex + 1
//     setCurrentIndex(index)
//     setFlipped(false)
//   }

//   const toggleFlip = () => {
//     setFlipped(!flipped)
//   }

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <div
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-yellow-300 hover:text-black p-2 rounded-full	backdrop-contrast-50"
//         onClick={prevSlide}
//       >
//         <MdArrowBackIosNew size={30} />
//       </div>

//       <div className="flex justify-center items-center overflow-hidden ">
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             className={`relative w-3/4 transition-all duration-500 ease-in-out  transform ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             } ${index === currentIndex ? "block" : "hidden"}`}
//           >
//             {index === currentIndex && (
//               <div
//                 className="relative w-full h-96 text-center bg-white rounded-xl cursor-pointer "
//                 onClick={toggleFlip}
//               >
//                 <div className="absolute w-full h-full transition-opacity duration-500 ease-in-out">
//                   {!flipped ? (
//                     <div className="flex flex-col items-center h-full justify-center rounded-lg ">
//                       <h1 className="text-3xl font-semibold	leading-normal text-black w-3/4">
//                         {item.backContent}
//                       </h1>
//                       <p className="text-black mt-20">
//                         Tap to reveal the answer
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center p-1">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover rounded-lg"
//                       />
//                       <h2 className="text-2xl mt-2 text-black ">
//                         {item.description}
//                       </h2>
//                       <p className="text-lg mt-2 text-black">
//                         {item.description}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-yellow-300 hover:text-black p-2 rounded-full	backdrop-contrast-50"
//         onClick={nextSlide}
//       >
//         <MdArrowForwardIos size={30} />
//       </div>
//     </div>
//   )
// }

// export default Carousal

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
import sl1 from "../assets/sl1.png"
import sl2 from "../assets/sl2.png"
import sl3 from "../assets/sl3.png"
import sl4 from "../assets/sl4.png"
import sl5 from "../assets/sl5.png"
import sl6 from "../assets/sl6.png"
import sl7 from "../assets/sl7.png"
import sl8 from "../assets/sl8.png"
import sl9 from "../assets/sl9.png"
import sl10 from "../assets/sl10.png"

const items = [
  {
    id: 1,
    image: sl1,
    description: "Eve has 16 apples now (9 + 7 = 16)",
    title: "Slide 1",
    backContent:
      "Eve has 9 apples and she was given 7 more. How many apples does she have now? ",
  },
  {
    id: 2,
    image: sl2,
    title: "Slide 2",
    description: "Lucas has 9 candies left (14 - 5 = 9)",
    backContent:
      "Lucas had 14 candies. He ate 5. How many candies does he have left? ",
  },
  {
    id: 3,
    image: sl3,
    title: "Slide 3",
    description: "There are 5 cats left in the room (11 - 6 = 5)",
    backContent:
      "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
  },
  {
    id: 4,
    image: sl4,
    title: "Slide 4",
    description: "Tom now has 14 pencils (8 + 6 = 14)",
    backContent:
      "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now? ",
  },
  {
    id: 5,
    image: sl5,
    title: "Slide 5",
    description: "Maria has 9 cupcakes left (20 - 11 = 9)",
    backContent:
      "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left? ",
  },
  {
    id: 6,
    image: sl6,
    title: "Slide 6",
    description: "There are 12 goldfish in the aquarium now (7+5=12)",
    backContent:
      "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
  },
  {
    id: 7,
    image: sl7,
    title: "Slide 7",
    description: "There are 16 oranges in total (10 + 6 = 16)",
    backContent:
      "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total? ",
  },
  {
    id: 8,
    image: sl8,
    title: "Slide 8",
    description: "There are 11 apples left in the box (18-7=11)",
    backContent:
      "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
  },
  {
    id: 9,
    image: sl9,
    title: "Slide 9",
    description: "Rita has 5 balloons now (12-7=5)",
    backContent:
      "Lisa had 12 balloons, and 7 flew away. How many balloons does Rita have now?",
  },
  {
    id: 10,
    image: sl10,
    title: "Slide 10",
    description: "Michael has $20 now (15+5=20)",
    backContent:
      "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
  },
]

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const navigate = useNavigate()

  const prevSlide = () => {
    if (currentIndex === 0) {
      navigate("/")
    } else {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
    }
  }

  const nextSlide = () => {
    if (currentIndex === items.length - 1) {
      navigate("/page3")
    } else {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
    }
  }

  const toggleFlip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-yellow-300 hover:text-black p-2 rounded-full backdrop-contrast-50"
        onClick={prevSlide}
      >
        <MdArrowBackIosNew size={30} />
      </div>

      <div className="flex justify-center items-center overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative w-3/4 transition-all duration-500 ease-in-out transform ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } ${index === currentIndex ? "block" : "hidden"}`}
          >
            {index === currentIndex && (
              <div
                className="relative w-full h-96 text-center bg-white rounded-xl cursor-pointer"
                onClick={toggleFlip}
              >
                <div className="absolute w-full h-full transition-opacity duration-500 ease-in-out">
                  {!flipped ? (
                    <div className="flex flex-col items-center h-full justify-center rounded-lg">
                      <h1 className="text-3xl font-semibold leading-normal text-black w-3/4">
                        {item.backContent}
                      </h1>
                      <p className="text-black mt-20">
                        Tap to reveal the answer
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center p-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <h2 className="text-2xl mt-2 text-black">
                        {item.description}
                      </h2>
                      <p className="text-lg mt-2 text-black">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-yellow-300 hover:text-black p-2 rounded-full backdrop-contrast-50"
        onClick={nextSlide}
      >
        <MdArrowForwardIos size={30} />
      </div>
    </div>
  )
  // kmkmkmk
}

export default Carousal
