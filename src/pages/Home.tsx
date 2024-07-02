import React from "react";
import Image from "../components/Image.tsx";
import Content from "../components/Content.tsx";
import socialImage from "../assets/images/social.png";
import newsImage from "../assets/images/news.png";
import orderImage from "../assets/images/order.png";
import Section from "../components/Section.tsx";
import Footer from "../components/Footer.tsx";
import Banner from "../components/Banner.tsx";
import Feature from "../components/Feature.tsx";

const items = [
  { src: newsImage, alt: "news" },
  { src: socialImage, alt: "social" },
  { src: orderImage, alt: "order" },
];

const Landing = () => {
  return (
    <>
      <Banner />
      <Feature />
      <div>
        {items.map((item, index) => (
          <div key={index} className="justify-center flex flex-col md:flex-row">
            <Image src={item.src} alt={item.alt} />
            <Content text="Light, Fast & Powerful" />
          </div>
        ))}
      </div>
      <Section />
      <Footer />
    </>
  );
};

export default Landing;
