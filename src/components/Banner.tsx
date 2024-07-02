import React from 'react'
import Button from './Button.tsx'
import designerImage from '../assets/images/designer_1.png'

const Banner = () => {
  return (
    <div id="about" className="relative flex mx-8  ">
        <div
          className="  h-auto mt-10 lg:h-screen md:h-screen  flex flex-col justify-center items-center z-30 gap-8 w-full lg:w-1/2 sm:w-full  md:w-1/2 "
        >
          <h1 className="text-purple-dark text-4xl font-semibold">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="text-purple-light text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="flex gap-4 my-3 w-full">
        
            <Button text="Purchase UI Kit" bgColor ="bg-purple-dark"/>
            <Button text="Learn more" bgColor ="bg-purple-dark"/>
          </div>
        </div>
        <div className="wrapper absolute right-0 -mr-20 md:mr-0  hidden  md:block  ">
          <img className=" h-dvh" src={designerImage} alt="" />
        </div>
      </div>

  )
}

export default Banner