import { useEffect, useState } from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchByCatagory } from "../../redux/action/product"
import SingleProduct from "./SingleProduct"

SwiperCore.use([Navigation])

const RelatedSlider = ({Products, translate}) => {

    return (
        <>
            {Products.map((product, i) => (
                <div key={product["id"]+i} style={{width : "25%"}}>
                    <SingleProduct product={product} translate={translate}/>
                </div>
            ))} 
          
        </>
    )
}

export default RelatedSlider
