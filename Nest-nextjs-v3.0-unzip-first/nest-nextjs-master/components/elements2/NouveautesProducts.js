import { useEffect, useState } from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchByCatagory } from "../../redux/action/product"
import SingleProduct from "./SingleProduct"

SwiperCore.use([Navigation])

const RelatedSlider = ({Products, translate}) => {

    return (    
            <section>
                <div className="row product-grid-3">
                    {Products.length === 0 && (
                        <h3>{translate("Pas de produits")}</h3>
                    )}
                    {
                    Products.map((product, i) => (
                        <div
                            className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                            key={i}
                        >
                            <SingleProduct product={product} translate = {translate}/>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default RelatedSlider
