import React from 'react'
import OutlineButton from './OutlineButton'

import sneaker from '../assets/introduction/sneaker-intro.png'
import playCircle from '../assets/introduction/play-circle.png'

import blueIconPng from '../assets/introduction/blue-icon.png'
import cupIconPng from '../assets/introduction/cup.png'

import monsterPng from '../assets/introduction/monster.png'
import greenIconPng from '../assets/introduction/green-icon.png'

import tvIconPng from '../assets/introduction/tv.png'
import purpleIconPng from '../assets/introduction/purple-icon.png'

function Introduction() {
  return (
    <div className='introduction'>
        <div className='m-auto pt-16'>
            
            <div className='flex items-center justify-between flex-wrap lg:px-24'>
                <div className='flex flex-col gap-8 w-screen lg:w-3/5 px-0'>
                    <a className='text-6xl md:text-7xl roboto-black text-center lg:text-start'>Collectible Sneakers</a>
                    <p className='flex max-w-[450px] md:max-w-[700px] self-center lg:self-start roboto-regular text-center lg:text-start px-8 md:px-16 lg:p-0'>
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </p> 
                    <div className='flex gap-4 self-center lg:self-start'>
                        <OutlineButton color={'amber-900'} borderColor={'amber-900'}>
                            Sign up now
                        </OutlineButton>
                        <a href='#' className='text-amber-900 text-md roboto-medium flex items-center gap-1'>
                            <img src={playCircle} width='24' height='24' />
                            <span>Watch Demo</span>
                        </a>
                    </div>
                </div>
                <div className='sneaker-box w-screen flex justify-center lg:w-2/5 mt-16 pb-8'>
                    <img className='min-w-[361px] w-1/2' src={sneaker} />
                </div>
            </div>

            <div className='intro-paragraphs flex flex-wrap justify-between items-end lg:pt-0 px-8 md:px-24 md:mt-48 bg-amber-100 md:bg-transparent'>
                <div className='flex flex-col w-screen md:w-1/3 gap-2 items-center lg:items-start mb-8'>
                    <div className='p-icon relative'>
                        <img className='z-10' src={cupIconPng} />
                        <img className='absolute top-0 left-8' src={blueIconPng} />
                    </div>
                    <a className='roboto-medium text-xl'>Nibh viverra</a>
                    <p className='flex text-lg roboto-regular text-center md:text-start'>
                    Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
                    </p>
                </div>
                <div className='flex flex-col w-screen md:w-1/3 gap-2 items-center lg:items-start mb-8'>
                    <div className='p-icon relative'>
                        <img className='z-10' src={monsterPng} />
                        <img className='absolute top-0 left-8' src={greenIconPng} />
                    </div>
                    <a className='roboto-medium text-xl'>Cursus amet</a>
                    <p className='max-w-[400px] text-lg roboto-regular text-center md:text-start'>
                    Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
                    </p>
                </div>
                <div className='flex flex-col w-screen md:w-1/3 gap-2 items-center lg:items-start mb-8'>
                    <div className='p-icon relative'>
                        <img className='z-10' src={tvIconPng} />
                        <img className='absolute top-0 left-8' src={purpleIconPng} />
                    </div>
                    <a className='roboto-medium text-xl'>Ipsum fermentum</a>
                    <p className='max-w-[400px] text-lg roboto-regular text-center md:text-start'>
                    Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Introduction