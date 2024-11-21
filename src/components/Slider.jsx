import React, { createRef, forwardRef, useRef,useState,useEffect } from 'react'
import arrowLeft from '../assets/slider/arrow-left.png'
import arrowRight from '../assets/slider/arrow-right.png'

import person1Img from '../assets/slider/person1.jpeg'
import person2Img from '../assets/slider/person2.png'
import person3Img from '../assets/slider/person3.png'
import person4Img from '../assets/slider/person4.png'

import company1Img from '../assets/slider/company1.png'
import company2Img from '../assets/slider/company2.png'
import company3Img from '../assets/slider/company3.png'
import company4Img from '../assets/slider/company4.png'
import SliderItem from './SliderItem'


function Slider() {
    const sliderItems = [
        {
            "id" : 1,
            "companyLogo" : company1Img,
            "companyName" : 'Zoomerr',
            "comment" : 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            "profileImage" : person1Img,
            "personName" : 'Hellen Jummy',
            "personPosition" : 'Team Lead'
        },
        {
            "id" : 2,
            "companyLogo" : company2Img,
            "companyName" : 'SHELLS',
            "comment" : 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
            "profileImage" : person2Img,
            "personName" : 'Hellena John',
            "personPosition" : 'Co-founder'
        },
        {
            "id" : 3,
            "companyLogo" : company3Img,
            "companyName" : 'ArtVenue',
            "comment" : 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
            "profileImage" : person3Img,
            "personName" : 'David Oshodi',
            "personPosition" : 'Manager'
        },
        {
            "id" : 4,
            "companyLogo" : company4Img,
            "companyName" : 'Waves',
            "comment" : 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
            "profileImage" : person4Img,
            "personName" : 'Charolette Hanlin',
            "personPosition" : 'CEO'
        },
        {
            "id" : 5,
            "companyLogo" : company1Img,
            "companyName" : 'Zoomerr',
            "comment" : 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            "profileImage" : person1Img,
            "personName" : 'Hellen Jummy',
            "personPosition" : 'Team Lead'
        },

    ]

    const slider = useRef();
    
    const cardRef = createRef();

    const goRight = () => {
        slider.current.scrollLeft += cardRef.current.offsetWidth + 32;
    }
    const goLeft = () => {
        slider.current.scrollLeft -= cardRef.current.offsetWidth + 32;
    }

  return (
    <div className='mt-24 w-full min-h-[450px] relative overflow-x-hidden py-2'>
        <div className='bg-amber-200 yellowBgWidth h-[300px] -z-40  absolute top-24 left-24'></div>
        <div className='flex px-12 md:px-24 md:justify-between justify-center'>
            <a className='text-3xl md:text-4xl roboto-bold'>Because they love us</a>
            <div className='flex gap-4'>
                <button 
                    onClick={goLeft}
                    className='border-2 border-amber-900 rounded-full w-12 h-12 hidden md:flex justify-center items-center'>
                    <img src={arrowLeft}/>
                </button>
                <button 
                    onClick={goRight}
                    className='border-2 border-amber-900 rounded-full w-12 h-12 hidden md:flex justify-center items-center'>
                    <img src={arrowRight}/>
                </button>
            </div>
        </div>
        <div className='flex w-full overflow-x-scroll gap-8 py-8 mt-8 scroll-smooth z-40 px-4' ref={slider}>
            {sliderItems.map(item => (
                <SliderItem
                    ref={cardRef}
                    key={item.id}
                    companyLogo={item.companyLogo} 
                    companyName={item.companyName}
                    comment={item.comment}
                    profileImage={item.profileImage}
                    personName={item.personName}
                    personPosition={item.personPosition}
                />
            ))}
        </div>

    </div>
  )
}

export default Slider