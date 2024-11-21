import React from "react";
import checkImg from "../assets/whyJoinUs/check.png";
import topBarImg from "../assets/whyJoinUs/top-bar.png";
import videoImg from "../assets/whyJoinUs/video.png";
import OutlineButton from "./OutlineButton";
function WhyJoinUs() {
  return (
    <div>
      <div className="m-4 whyJoinUsShadow p-4 py-8 rounded-3xl flex flex-col items-center lg:flex-row lg:mx-24 lg:justify-between lg:p-16">
        <div className="flex flex-col lg:mt-8">
          <a className="text-slate-900 text-4xl roboto-black self-center mb-4 lg:self-start">
            Why join us
          </a>
          <div className="">
            <div className="flex p-2 gap-4 lg:gap-2 lg:px-0">
              <span>
                <img src={checkImg} width={24} height={24} />
              </span>
              <a className="text-md roboto-regular text-slate-900">
                Est et in pharetra magna adipiscing ornare aliquam.
              </a>
            </div>
            <div className="flex p-2 gap-4 lg:gap-2 lg:px-0">
              <span>
                <img src={checkImg} width={24} height={24} />
              </span>
              <a className="text-md roboto-regular text-slate-900">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </a>
            </div>
            <div className="flex p-2 gap-4 lg:gap-2 lg:px-0">
              <span>
                <img src={checkImg} width={24} height={24} />
              </span>
              <a className="text-md roboto-regular text-slate-900">
                Ullamcorper ornare in et egestas dolor orci.
              </a>
            </div>
          </div>
          <OutlineButton
            color={"amber-900"}
            borderColor={"amber-900"}
            className={"py-4 px-8 mt-4 self-center lg:self-start"}
          >
            Sign up now
          </OutlineButton>
        </div>

        <div className="border-8 border-white shadow-xl shadow-slate-700 rounded-2xl overflow-hidden mt-8 lg:w-5/12 lg:mt-0">
          <div className="">
            <img src={topBarImg} />
          </div>
          <div className="video-area">
            <img className="w-full" src={videoImg} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhyJoinUs;
