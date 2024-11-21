import React from "react";
import OutlineButton from "./OutlineButton";
import cartIcon from '../assets/productIntro/cart.png'
function ProductItem({ imageSource, title, content }) {
  return (
    <div className="mt-6 shadow-slate-100 shadow-sm rounded-xl overflow-hidden">
      <div className="flex">
        <img className="w-full rounded" src={imageSource} />
      </div>
      <div className="m-12 flex flex-col gap-2">
        <a className="text-white text-2xl roboto-bold">{title}</a>
        <p className="text-lg roboto-regular text-white">{content}</p>
        <OutlineButton color={'white'} borderColor={'white'} className={'mt-4 w-full flex items-center justify-center gap-4'}>
            <span>
                <img src={cartIcon}/>
            </span>
            Buy Now
        </OutlineButton>
      </div>
    </div>
  );
}

export default ProductItem;
