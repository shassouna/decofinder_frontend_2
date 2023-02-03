
import SwiperCore, { Navigation, Thumbs } from "swiper"
import "swiper/css/thumbs"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Thumbs])

const ThumbSlider = ({ product }) => {

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                className="mySwiper2"
            >
                {product["attributes"]["images"]["data"].map((item) => (
                    <SwiperSlide >
                        <img id={item["id"]} src={`http://localhost:1337${item["attributes"]["url"]}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={10}
                slidesPerView={product["attributes"]["images"]["data"].length}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
                >
                {product["attributes"]["images"]["data"].map((item) => (
                    <SwiperSlide>
                         <img id={item["id"]} src={`http://localhost:1337${item["attributes"]["url"]}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ThumbSlider
