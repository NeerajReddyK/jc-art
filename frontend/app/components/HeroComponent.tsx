"use client"
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";
import Header from "./Header";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Span from "./Span";
import Button from "./Button";


const HeroComponent = () => {

  return (
    <div className="h-screen">
      <Header />
      <div className="grid grid-cols-12 py-6 items-start m-3 rounded-2xl overflow-hidden">
        <div className="col-span-1">
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          <TextGenerateEffect words="Silence of Love..." className="font-handwriting"/>
          <motion.p 
            className="mb-10 mt-2 text-justify font-semibold text-xs md:text-lg text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6, // controls the speed of transition, decrease to slow, increase to speed.
              ease: "easeInOut",
              staggerChildren: 0.2, // stagger effect for the spans
            }}
          >
            This work represents 
            <Span content="personal reflection"/>
            and
            <Span content="connection with nature," />
            specifically the forest. The art captivates the
            viewer, 
            <Span content="fostering a deeper connection with nature"/>
             and inviting personal and
            collective reflection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <BackgroundGradient className="rounded-[22px] w-full lg:max-w-[500px]">
              <video
                controls 
                autoPlay
                muted
                loop
                className="rounded-xl w-fit h-auto object-contain" // Responsive video with object-contain for maintaining aspect ratio
                style={{ maxHeight: "auto"}} // Match image height
              >
                <source src="/example_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </BackgroundGradient>
          </motion.div>
        </div>

        <motion.div 
          className="col-span-12 md:col-span-7 flex flex-col  items-center pr-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BackgroundGradient className="rounded-[22px]p-0 m-0 w-full lg:max-w-[500px]"> 
            <motion.div
              initial={{ scale: 1 }} // Default scale
              whileHover={{ scale: 1.05 }} // Increase scale on hover 
              transition={{ type: "spring", stiffness: 300, damping: 55 }} // Spring transition for smoothness
              className="flex justify-center items-center w-auto h-auto" 
            >
              <Image
                src="/example-image.png"
                alt="Art Work image"
                className="rounded-xl max-sm sm:max-md"
                width={500}
                height={500}
              />
            </motion.div>
          </BackgroundGradient>
          {/* Image Details: Size, Materials, Year */}
          <div className="flex justify-center mt-6 w-full ">
            <div className="w-full flex justify-end items-start px-5">
              <div className="w-full max-w-[50%] text-xs md:text-lg">
                <div className="text-left text-base">
                  <p><Span content="Size:" /> 80 x 60 cm</p>
                  <p><Span content="Materials:"/> Oil and flour on canvas</p>
                  <p><Span content="Year of creation:"/> 2023</p>
                  <div className="mt-4 ">
                    <Button name="Know what people are saying" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroComponent;