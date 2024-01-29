import { TestimonialsData } from '@/src/utils/data'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slideToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1500, 
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
        <div>
            <Slider {...settings}>
                {
                    TestimonialsData.map((comment, i)=> (
                        <div key={i} className='comment'>
                            {/* Upper Side */}
                            <div className='c-content'>
                                <Image
                                src={"/apos.svg"}
                                className='apos-slider'
                                alt='apos'
                                width={40}
                                height={30}
                                />
                                <span>{comment.comment}</span>
                            </div>

                            {/* Lower Side */}
                            <div className='c-info'>

                            <div className='c-avatar'><Image src={comment.image} width={60} height={60}/></div>
                            <div className='c-person'>
                                <span>{comment.name}</span>
                                <span>{comment.profession}</span>
                            </div>
                        </div>
                            </div>
                    ))
                }
            </Slider>
        </div>
  )
}

export default SlickSlider