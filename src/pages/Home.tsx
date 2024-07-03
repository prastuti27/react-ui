import React from "react";
import Image from "../components/Image.tsx";
import Content from "../components/Content.tsx";
import { imageData } from "../data/ImageData.tsx";
import Section from "../components/Section.tsx";
import Footer from "../components/Footer.tsx";
import Banner from "../components/Banner.tsx";
import Feature from "../components/Feature.tsx";

const items = [
  { src: imageData.news, alt: "news" },
  { src: imageData.social, alt: "social" },
  { src: imageData.order, alt: "order" },
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
