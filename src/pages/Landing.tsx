import React from 'react'
import Image from '../components/Image.tsx'
import Content from '../components/Content.tsx'
import socialImage from '../assets/images/social.png'
import newsImage from '../assets/images/news.png'
import orderImage from '../assets/images/order.png'

const Landing = () => {
  return (
    <>
     <div className='flex  justify-center '>   
    <Image src={newsImage} alt ="news"/>
    <Content/>
    </div>
    <div className='flex  justify-center '>
     <Image src={socialImage} alt ="social"/>
     <Content/>
     </div>
     <div className='flex  justify-center '>
     <Image src={orderImage} alt ="order"/>
     <Content/>
     </div>
    
    </>
  )
}

export default Landing
