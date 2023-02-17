// import "react-input-range/lib/css/index.css"
import "react-perfect-scrollbar/dist/css/styles.css"
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
import { useTranslation } from "next-i18next"
import axios from "axios"


MyApp.getInitialProps = async (context) => {

    // import qs
    const qs =require('qs')
    
    // get data for the header menu 
    const querySuperunivers = qs.stringify({
          populate: [
            'univers.categories',
            'univers'
        ],
        locale : context["router"]["locale"]
      }, 
      {
        encodeValuesOnly: true, // prettify URL
      })
    const resSuperunivers = await axios.get(`http://localhost:1337/api/superuniverss?${querySuperunivers}`)

    // Query Exposants
    const queryExposants = qs.stringify({
        populate : [
            "logo"
        ],
        locale: context["router"]["locale"]
    })
    const resExposants = await axios.get(`http://localhost:1337/api/exposants?${queryExposants}`)

  return { 
    superuniverss: resSuperunivers.data.data,
    exposants: resExposants.data.data,   
  }

}

function MyApp({ Component, pageProps, superuniverss, exposants }) {


    // Translations
    const {t : translate} = useTranslation("home")

    return (
        <Layout noBreadcrumb="d-none" superuniverss={superuniverss} exposants={exposants} translate={translate}> 
            <Component {...pageProps} GlobalFunctions={GlobalFunctions} />

        </Layout>
    )
}

export default appWithTranslation(MyApp)

