import React from 'react'
import Image from '../components/Image.tsx'
import Content from '../components/Content.tsx'
import socialImage from '../assets/images/social.png'
import newsImage from '../assets/images/news.png'
import orderImage from '../assets/images/order.png'
import Footer from '../components/Footer.tsx'


const Landing = () => {
  return (
    <>
     <div className='  justify-center   flex flex-col   md:flex-row '>   
    <Image src={newsImage} alt ="news"/>
    <Content/>
    </div>
    <div className=' justify-center   flex flex-col   md:flex-row '>
     <Image src={socialImage} alt ="social"/>
     <Content/>
     </div>
     <div className=' justify-center   flex flex-col   md:flex-row'>
     <Image src={orderImage} alt ="order"/>
     <Content/>
     </div>
    <Footer/>
    </>
  )
}

export default Landing
