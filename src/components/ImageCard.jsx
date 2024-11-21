import React from 'react'

function ImageCard({imageSource,className}) {
  return (
    
    <div className={'flex flex-col lg:max-w-[256px] max-w-[95px] ' + className}>
        <img src={imageSource}/>
    </div>
  )
}

export default ImageCard