import React, { useState } from "react";

import searchIconImg from "../assets/beforeFooter/search.png";
import shieldCheckIcon from "../assets/beforeFooter/shield-check.png";
import rocketIcon from "../assets/beforeFooter/rocket.png";
import screenIcon from "../assets/beforeFooter/screen.png";
import podcastIcon from "../assets/beforeFooter/podcast.png";
import settingsIcon from "../assets/beforeFooter/settings-alt.png";

import rightArrowImg from "../assets/beforeFooter/arrow-right.png";

import shoesImage from "../assets/beforeFooter/shoes.png";
import runningImage from "../assets/beforeFooter/running.png";
import imageCardSource from "../assets/beforeFooter/mini-shoe.png";

import ellipsesImage from "../assets/beforeFooter/Ellipses.png";

import DesktopScreen from "./DesktopScreen";
import ImageCard from "./ImageCard";

function BeforeFooter() {
  const items = [
    {
      id: 0,
      icon: searchIconImg,
      text: "Bibendum tellus",
      images: [runningImage, shoesImage],
    },
    {
      id: 1,
      icon: shieldCheckIcon,
      text: "Cras Eget",
      images: [shoesImage, runningImage],
    },
    {
      id: 2,
      icon: rocketIcon,
      text: "Dolor pharetra",
      images: [shoesImage, runningImage],
    },
    {
      id: 3,
      icon: screenIcon,
      text: "Amet, fringilla",
      images: [shoesImage, runningImage],
    },
    {
      id: 4,
      icon: podcastIcon,
      text: "Amet nibh",
      images: [shoesImage, runningImage],
    },
    {
      id: 5,
      icon: settingsIcon,
      text: "Sed velit",
      images: [shoesImage, runningImage],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="mt-24">
      <div className="flex flex-col items-center lg:items-start px-4 lg:px-24">
        <a className="flex text-4xl lg:text-5xl roboto-bold self-center lg:text-start">
          Grow your collection
        </a>
        <p className="roboto-regular text-lg mt-8 text-center lg:text-start">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="flex justify-start items-center xl:items-start mt-24 px-4 lg:px-24 waveBg flex-col xl:flex-row ">
        <div className="flex w-full xl:w-1/3 xl:flex-col gap-4 overflow-x-scroll pb-4 xl:p-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={
                "m-1 min-w-[240px] max-w-[300px] p-3 flex flex-row rounded-lg gap-4" +
                (selectedItem.id == item.id ? " myShadow bg-white" : "")
              }
            >
              <span className="w-6 flex justify-center items-center">
                <img className="w-full" src={item.icon} />
              </span>
              {item.text}
              {selectedItem.id == item.id ? (
                <img className="ml-auto" src={rightArrowImg} />
              ) : null}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-2/3 flex items-start justify-center px-6 lg:px-8 ml-0 lg:ml-12 mt-12 lg:mt-0">
          <DesktopScreen screenImage={selectedItem.images[0]} />
          <DesktopScreen
            classname="absolute left-12 lg:left-24 top-12 lg:top-24"
            screenImage={selectedItem.images[1]}
          />
          {/* <ImageCard className='absolute  right-0  md:-right-24  z-30' imageSource={imageCardSource} /> */}
        </div>
      </div>

      <div className="relative bg-chart-image min-h-[700px] bg-amber-900 bg-no-repeat bg-left md:bg-center flex overflow-hidden">
        <div className="flex flex-col justify-center m-auto gap-4 z-20">
          <a className="text-5xl md:text-8xl text-white roboto-bold text-center">
            11,658,467
          </a>
          <a className="text-3xl md:text-5xl text-white roboto-bold text-center">
            Shoes Collected
          </a>
        </div>

        
        {/* <div className="absolute overflow-hidden">
         
          <img
            src={ellipsesImage}
            useMap="#workmap"
            className=""
          ></img>

          <map name="workmap">
            <area
              className="cursor-pointer"
              shape="circle"
              coords="395,290,20"
              alt="Cup of coffee"
              onClick={() => showModal(395, 290)}
            />

            <area
              className="cursor-pointer"
              shape="circle"
              coords="1,1,20"
              alt="Cup of coffee"
              onClick={() => showModal(395, 290)}
            />
          </map>
        </div> */}

        
      </div>
    </div>
  );
}

export default BeforeFooter;
