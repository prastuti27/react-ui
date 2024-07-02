import React from 'react';
import Image from '../components/Image.tsx';
import Content from '../components/Content.tsx';
import socialImage from '../assets/images/social.png';
import newsImage from '../assets/images/news.png';
import orderImage from '../assets/images/order.png';
import Footer from '../components/Footer.tsx';
import Banner from '../components/Banner.tsx';

const items = [
  { src: newsImage, alt: 'news' },
  { src: socialImage, alt: 'social' },
  { src: orderImage, alt: 'order' }
];

const Landing = () => {
  return (
    <>
      <Banner />
      <div>
        {items.map((item, index) => (
          <div key={index} className='justify-center flex flex-col md:flex-row'>
            <Image src={item.src} alt={item.alt} />
            <Content />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Landing;
