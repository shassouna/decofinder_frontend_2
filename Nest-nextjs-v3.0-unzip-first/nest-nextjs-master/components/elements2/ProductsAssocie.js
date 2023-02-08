import { useEffect, useState } from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchByCatagory } from "../../redux/action/product"
import SingleProduct from "../elements2/SingleProduct"

SwiperCore.use([Navigation])

const RelatedSlider = ({Products, translate}) => {

    return (
        <>
            {Products.length>4&&
            <>
                <Swiper slidesPerView={4} spaceBetween={30} navigation={{ prevEl: ".custom_prev_n", nextEl: ".custom_next_n"}} className="custom-class">
                {Products.map((product, i) => (
                    <SwiperSlide key={product["id"]+i}>
                        <SingleProduct product={product} translate={translate}/>
                    </SwiperSlide>
                ))}
                </Swiper>

                <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow">
                    <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                        <i className="fi-rs-angle-left"></i>
                    </span>
                    <span className="slider-btn slider-next slick-arrow custom_next_n">
                        <i className="fi-rs-angle-right"></i>
                    </span>
                </div>
            </>            
            }
            {Products.length<5&&Products.map((product, i) => (
                <div key={product["id"]+i} style={{width : "25%"}}>
                    <SingleProduct product={product} translate={translate}/>
                </div>
            ))} 
          
        </>
    )
}

export default RelatedSlider
