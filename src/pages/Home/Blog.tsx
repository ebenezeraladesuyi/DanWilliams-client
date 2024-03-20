// import React from 'react'

import BlogCard from "../../components/static/BlogCard"
import img1 from "../../assets/images/biz5.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


  return (
    <div id="blog" className="w-full h-[100 py-[50px] flex flex-col items-center justify-center bg-blac font-pop shadow-md overflow-hidden">
        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
            <h5 className="text-[20px] md:text-[30px] font-bold text-center animate-bounce">BLOG</h5>

            <h5 className="text-[13px] md:text-[16px] w-full md:w-[70%] text-center">
                We are passionate about assisting people when it comes to personal development and staying updated in the business world, and every other aspect as relevant. Get yourself acquitted with the moving world with our inspirational, transformational and informational posts.
            </h5>

            <div className="w-full mt-[20px]">
                <Slider {...settings}>
                    <BlogCard 
                        img={img1}
                        title="BREAK THE SHACKLES"
                        details="As people, much of who we are today, how we behave, how we think, how we view the world, how we interpret situations, handles success, define failures and how we talk to ourselves and others is based on the collection of beliefs we’ve accumulated over our lifetimes."
                    />
                    <BlogCard 
                        img={img1}
                        title="MY LEADRSHIP JOURNEY"
                        details="MY LEADERSHIP JOURNEY (A Testament Of Possibility) My Leadership Journey stands as a testament to the possibilities of transformation and progressive growth throughout the years. From a young age, I had a unique enthusiasm for influence, impact, and high performance, a passion that continues to shape my approach today."
                    />
                    <BlogCard 
                        img={img1}
                        title="THE ENTREPRENEURIAL PTSD"
                        details="The entrepreneurial PTSD emanating from failed businesses is a real thing.  The feeling of shame, embarrassment & even rejection is a real emotional battle for some to overcome. I have seen so many founders and business owners suffer in silence. And the effects of the suffering destroys their creativity, zeal for life and passion for the future.  They remain stuck. Confused. Cluttered minds. And broken spirits."
                    />
                    <BlogCard 
                        img={img1}
                        title="PERSONAL BRAND"
                        details="A personal brand is a relationship with you, an individual who exists separately from your company. The process of personal branding involves finding your uniqueness, building a reputation on the things you want to be known for, and then allowing yourself to be known for them."
                    />
                </Slider>
                
            </div>
        </div>
    </div>
  )
}

export default Blog