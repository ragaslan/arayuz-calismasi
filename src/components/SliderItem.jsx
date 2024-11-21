import React, { forwardRef } from 'react'

const  SliderItem = forwardRef(({companyName,companyLogo,comment,profileImage,personName,personPosition},ref) => {
  return (
    <div className='myShadow w-full flex flex-col justify-between lg:w-1/4 flex-shrink-0 rounded-2xl p-8 bg-white' ref={ref}>
        <div className='flex gap-2'>
            <div>
                <img className='w-8 h-8' src={companyLogo} alt={companyName} />
            </div>
            <div className='text-2xl roboto-bold text-slate-600'>{companyName}</div>
        </div>
        <div className='mt-8 text-2xl'>
            {comment}
        </div>
        <div className='flex gap-4 items-center mt-8'>
            <div className='overflow-hidden flex'>
                <img className='rounded-full w-16 h-16' src={profileImage} alt={personName}/>
            </div>
            <div className='flex flex-col'>
                <div className='text-lg text-black'>{personName}</div>
                <div className='text-base text-slate-600'>{personPosition}</div>
            </div>
        </div>
    </div>
  )
})

export default SliderItem