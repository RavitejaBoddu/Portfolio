import React, { useRef, useState } from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";
import propic from "../../images/profile-photo.avif";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import aoc from "../../images/anime/aoc.jpg";
import bleach from "../../images/anime/bleach.jpg";
import dbz from "../../images/anime/dbz.jpg";
import demon from "../../images/anime/demon.jpg";
import haikyuu from "../../images/anime/haikyuu.jpg";
import hxh from "../../images/anime/hxh.png";
import jjk from "../../images/anime/jjk.jpg";
import naruto from "../../images/anime/naruto.webp";
import onepiece from "../../images/anime/onepiece.webp";
import Opman from "../../images/anime/Opman.jpg";
import slime from "../../images/anime/slime.jpg";
import tokyoghoul from "../../images/anime/tokyoghoul.webp";

// Import Swiper React componentswebp
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";

const About = () => {
  return (
    <div className="about">
      <h1>What I say about me?</h1>
      <div className="about-container">
        <div className="about-left-container">
          <h2 className="about-name">Hello, I'm Raviteja</h2>
          <div className="about-qual">
            <span className="about-qual1">Front-end Developer</span>
            <span className="about-dot"> &#8226; </span>
            <span className="about-qual2">Coder</span>
          </div>
          <div className="left-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="about-right-container">
          <img src={propic} alt="profile-photo" />
        </div>
      </div>
      <div className="about-icons">
        <Insta className="ab-insta jello-horizontal" size={"3rem"} />
        <LinkedIn className="ab-fb jello-horizontal" size={"3rem"} />
        <Gitub className="ab-github jello-horizontal" size={"3rem"} />
      </div>
      <h1>Hobbies</h1>
      <div className="hobbies-container">
        <div className="anime">
          <h2>My love for anime!</h2>
          <p>
            Anime is just the perfect thing for those, who are fascinated with
            animation which narrate amazing storylines. The visuals leave an
            impact hard enough to make you re-watch it. Anime is like a
            dreamland, carrying great stories with a rainbow of emotions.
          </p>
          <span>All the animes's I'v watched</span>
          <div className="anime-slides">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              speed={1800}
              autoplay={{
                delay: 1800,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, FreeMode, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={aoc} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bleach} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dbz} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={demon} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={haikyuu} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hxh} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jjk} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={naruto} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={onepiece} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Opman} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slime} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={tokyoghoul} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="reading"></div>
        <div className="sports"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
