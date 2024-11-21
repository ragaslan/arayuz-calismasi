import React from 'react'

import topBarImage from "../assets/beforeFooter/top-bar.png"

function DesktopScreen({screenImage,classname}) {
  return (
    <div className={'flex flex-col max-w-[760px] myShadow rounded-t-xl rounded-b-3xl overflow-hidden border-4 border-white ' + classname}>
        <div className='bg-white '>
            <img src={topBarImage}/>
        </div>
        <div className='-mt-4'>
            <img src={screenImage}/>
        </div>
    </div>
  )
}

export default DesktopScreen