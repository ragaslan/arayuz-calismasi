import React from 'react'
import OutlineButton from './OutlineButton'
import productImage1 from '../assets/productIntro/product-1.png'
import productImage2 from '../assets/productIntro/product-2.png'
import productImage3 from '../assets/productIntro/product-3.png'
import ProductItem from './ProductItem'
function ProductIntro() {
  return (
    <div className='bg-slate-900'>
        <div className='p-8 flex flex-col gap-8 lg:flex-row lg:justify-between lg:px-24 lg:pt-24'>
            <a className='text-white text-[32px] roboto-bold self-center'>The best of the best</a>
            <OutlineButton color={'white'} borderColor={'white'} className={'px-12 py-4 self-center'}>
                Sign up now
            </OutlineButton>
        </div>
        <div className='flex flex-col p-4 lg:flex-row lg:px-24 lg:py-8 lg:pb-16 gap-12'>
            <ProductItem imageSource={productImage1} title={'Title'} content={'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'}/>
            <ProductItem imageSource={productImage2} title={'Title'} content={'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'}/>
            <ProductItem imageSource={productImage3} title={'Title'} content={'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'}/>
        </div>
    </div>
  )
}

export default ProductIntro