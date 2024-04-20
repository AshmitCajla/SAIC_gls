import React, { useState, useEffect, useRef } from "react";
import "./0_landingpage.css";
import Bg from "./assets/3.jpg";
import Game_night from "./Assets/Game_night.jpg";
import PanelDiscussion from "./Assets/PanelDiscussion.jpg";
import StarNight from "./Assets/StarNight.jpg";
import Navbar from "./0_1_Navbar";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      handleSlideTransition("next");
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [currentIndex]);

  const handleSlideTransition = (type) => {
    const sliderItems = carouselRef.current.querySelectorAll(".list .item");
    const thumbnailItems =
      carouselRef.current.querySelectorAll(".thumbnail .item");

    if (type === "next") {
      carouselRef.current.querySelector(".list").appendChild(sliderItems[0]);
      carouselRef.current
        .querySelector(".thumbnail")
        .appendChild(thumbnailItems[0]);
      setCurrentIndex((currentIndex + 1) % sliderItems.length);
    } else {
      carouselRef.current
        .querySelector(".list")
        .prepend(sliderItems[sliderItems.length - 1]);
      carouselRef.current
        .querySelector(".thumbnail")
        .prepend(thumbnailItems[thumbnailItems.length - 1]);
      setCurrentIndex(
        (currentIndex - 1 + sliderItems.length) % sliderItems.length
      );
    }

    carouselRef.current.classList.add(type);

    setTimeout(() => {
      carouselRef.current.classList.remove(type);
    }, timeRunning);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (

    <div className="carousel" ref={carouselRef}>
          <Navbar/>
      <div className="list">
        <CarouselItem
          src={Bg}
          heading="SAIC"
          title="GLOBAL  LEADERSHIP"
          topic="SUMMIT 7.0"
          description="Get ready for the ultimate leadership experience! SAIC's Global
          Leadership Summit is back and better than ever. Three days
          jam-packed with inspiration, networking, and pure fun! Join forces
          with current college students and esteemed alumni for a
          mind-blowing exchange of ideas and experiences."
        />
        <CarouselItem
          src={Game_night}
          heading="SAIC"
          title="GLS 7.0"
          topic="Game Night"
          description="Taking you back to the good old days, we welcome you to another
          exciting day in this grand event-GLS. A night filled with laughter
          and anticipation as you play to win and create memories that will
          be etched in your hearts forever. Join us to unleash your
          competitive spirit and immerse yourself in a night you will never
          forget. Let the games begin!"
          Button1="Register Now!"
          Button1_redirect="/Register"
          Button2="Rule Book"
          Button2_redirect="https://example.com/subscribe"
        />
        <CarouselItem
          src={PanelDiscussion}
          heading="SAIC"
          title="GLS 7.0"
          topic="Alumni Panel"
          description="We are thrilled to announce the participation of our prestigious
          alumni panel for our upcoming event - Global Leadership Summit."
          Button1="Meet the Panelists"
          Button1_redirect="/Know_the_Alumni"
          Button2=""
          Button2_redirect="https://example.com/subscribe"
        />
        <CarouselItem
          src={StarNight}
          heading="SAIC"
          title="GLS 7.0"
          topic="Star Night"
          description="Get ready for a night of glitz and glamour as we welcome our 
          special guest for an unforgettable evening. Celebrate the achievements of our
          community and be inspired by their stories"
          Button1="Know the Star"
          Button1_redirect="/Know_the_Star"
          Button2=""
          Button2_redirect="https://example.com/subscribe"
        />
      </div>
      <div className="thumbnail">
        <ThumbnailItem
          src={Game_night}
          title="Game Night"
          description="26th April"
          isActive={currentIndex === 0}
          onClick={() => handleThumbnailClick(0)}
        />
        <ThumbnailItem
          src={PanelDiscussion}
          title="Alumni Panel"
          description="27th April"
          isActive={currentIndex === 1}
          onClick={() => handleThumbnailClick(1)}
        />
        <ThumbnailItem
          src={StarNight}
          title="Star Night"
          description="28th April"
          isActive={currentIndex === 2}
          onClick={() => handleThumbnailClick(2)}
        />
        <ThumbnailItem
          src={Bg}
          title="Home Page"
          description="GLS 7.0"
          isActive={currentIndex === 3}
          onClick={() => handleThumbnailClick(3)}
        />
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => handleSlideTransition("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => handleSlideTransition("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

const CarouselItem = ({
  src,
  heading,
  title,
  topic,
  description,
  Button1,
  Button1_redirect,
  Button2,
  Button2_redirect,
}) => (
  <div className="item">
    <img src={src} alt={title} />
    <div className="content">
      <div className="heading">{heading}</div>
      <div className="title">{title}</div>
      <div className="topic">{topic}</div>
      <div className="des">{description}</div>
      <div className="buttons">
        {Button1_redirect && (
          <a href={Button1_redirect} target="" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "#eee",
                border: "none",
                color: "#000",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
            >
              {Button1}
            </button>
          </a>
        )}

        {Button2 && (
          <a href={Button2_redirect} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              {Button2}
            </button>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ThumbnailItem = ({ src, title, description, isActive, onClick }) => (
  <div className={`item ${isActive ? "active" : ""}`} onClick={onClick}>
    <img src={src} alt={title} />
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default Carousel;
