import React from "react";

import appStore from "../assets/footer/app-store.png";
import playStore from "../assets/footer/google-play.png";

import youtubeIcon from "../assets/footer/youtube.png";
import facebookIcon from "../assets/footer/facebook.png";
import instagramIcon from "../assets/footer/instagram.png";
import linkedinIcon from "../assets/footer/linkedin.png";
import twitterIcon from "../assets/footer/twitter.png";

import worldIcon from "../assets/footer/world.png";
function Footer() {
  return (
    <div className="flex flex-col bg-slate-900 py-12 gap-16 p-4 lg:px-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">

        <div className="flex flex-col items-center gap-4 text-slate-200 roboto-regular text-base lg:items-start">
          <span className="roboto-medium text-base text-white">Product</span>
          <a href="#">Pricing</a>
          <a href="#">Overview</a>
          <a href="#">Browse</a>
          <a href="#">Accessibility</a>
          <a href="#">Five</a>
        </div>

        <div className="flex flex-col items-center gap-4 text-slate-200 roboto-regular text-base lg:items-start">
          <span className="roboto-medium text-base text-white">Solutions</span>
          <a href="#">Brainstorming</a>
          <a href="#">Ideation</a>
          <a href="#">Wireframing</a>
          <a href="#">Research</a>
          <a href="#">Design</a>
        </div>

        <div className="flex flex-col items-center gap-4 text-slate-200 roboto-regular text-base lg:items-start">
          <span className="roboto-medium text-base text-white">Support</span>
          <a href="#">Contact Us</a>
          <a href="#">Developers</a>
          <a href="#">Documentation</a>
          <a href="#">Integrations</a>
          <a href="#">Reports</a>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <span className="roboto-medium text-base text-white">
              Get the App
            </span>
            <a href="#">
              <img src={appStore} />
            </a>
            <a href="#">
              <img src={playStore} />
            </a>
          </div>
          <div className="flex flex-col items-center mt-16 lg:items-start">
            <span className="roboto-medium text-base text-white">
              Follow Us
            </span>
            <div className="flex gap-4 mt-6">
              <a href="#">
                <img src={youtubeIcon} width={24} height={24} />
              </a>
              <a href="#">
                <img src={facebookIcon} width={24} height={24} />
              </a>
              <a href="#">
                <img src={twitterIcon} width={24} height={24} />
              </a>
              <a href="#">
                <img src={instagramIcon} width={24} height={24} />
              </a>
              <a href="#">
                <img src={linkedinIcon} width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start">

        <span className="h-[1px]  bg-slate-600 w-full" />
        
        <div className="flex flex-col items-center gap-12 pt-12 lg:flex-row lg:justify-between w-full">
          <a className="text-slate-200">
            Collers @ 2023. All rights reserved.
          </a>
          
          <div className="flex gap-8 text-slate-200">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <div className="flex gap-1">
              <img src={worldIcon} />
              <select className="bg-transparent">
                <option value="en">EN</option>
                <option value="en">TR</option>
              </select>
            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Footer;
