// import "react-input-range/lib/css/index.css"
import "react-perfect-scrollbar/dist/css/styles.css"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"
import "react-responsive-modal/styles.css"
// import WOW from 'wowjs'
// Swiper Slider
import "swiper/css"
import "swiper/css/navigation"
import "../public/assets/css/main.css"
import { appWithTranslation } from 'next-i18next'
import GlobalFunctions from "./../components/elements2/GlobalFunctions"
import Layout from "./../components/layout/Layout"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"


function MyApp({ Component, pageProps, menuHeaderData }) {

    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("home")
    console.log(translate("Adresse"))
    return (
        <Layout noBreadcrumb="d-none" menuHeaderData={menuHeaderData} translate={translate}> 
            <Component {...pageProps} GlobalFunctions={GlobalFunctions} />
            <ToastContainer />
        </Layout>
    )
}

export default appWithTranslation(MyApp)

MyApp.getInitialProps = async () => {

    // import qs
    const qs =require('qs')
    
    // get data for the header menu 
    const query = qs.stringify({
          populate: [
            'univers.categories',
            'univers'
        ]
      }, {
        encodeValuesOnly: true, // prettify URL
      })

    const res = await axios.get(`http://localhost:1337/api/superuniversdetailss?${query}`)

    return {
      menuHeaderData : res.data.data
    }
}
