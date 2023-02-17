
// Import from components
import Intro1 from "./../components/elements2/Intro1"
import SuperuniverssSlider from "./../components/elements2/SuperuniverssSlider"
import RelatedProducts from "./../components/elements2/RelatedProducts"
import NouveautesProducts from "./../components/elements2/NouveautesProducts"
import Description from "../components/elements2/DescriptionHome"
import CommuniquesTag from "../components/elements2/Communiques"
// Import from Next
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// import from libraries
import axios from "axios" 
// import from react
import {useState} from "react"

export default function Home(props) {

    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("home")

    // States
    const [Superuniverss, setSuperuniverss] = useState(props["Superuniverss"])
    const [Products_Home, setProducts_Home] = useState(props["Products_Home"])
    const [Communiques, setCommuniques] = useState(props["Communiques"])
    const [Products_Nouveautes, setProducts_Nouveautes] = useState(props["Products_Nouveautes"])
    const [showButtonInSingleProduct, setShowButtonInSingleProduct] = useState(true)
    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    return (
        <>

            <div className="home-slider position-relative mb-30">
                <div className="container">
                    <div className="home-slide-cover mt-30">
                        <Intro1 />
                    </div>
                </div>
            </div>

            <div className="container mb-180">
                <div className="row">
                    <div className="col-12">
                        <div className="row related-products position-relative">
                            <RelatedProducts Products = {Products_Home} translate = {translate} showButtonInSingleProduct={showButtonInSingleProduct}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-60">
                <div className="carausel-10-columns-cover position-relative">
                    <div className="col-12">
                        <h3 className="section-title style-1 mb-30">{translate("Tous les Mega Univers")+" :"}</h3>
                    </div>
                    <div className="carausel-10-columns" id="carausel-10-columns">
                        <SuperuniverssSlider Superuniverss={Superuniverss} />
                    </div>
                </div>
            </div>

            <div className="container mb-60">
                <div className="row">
                    <Description locale={router["locale"]}/>
                </div>
            </div>

            <div className="container mb-60">
                <div className="row">
                    <h3 className="mb-25" style={{textAlign : "center"}}>{translate("DERNIERS COMMUNIQUÉS DE PRESSE")} : </h3>
                    <div className="loop-grid loop-list pr-30 mb-30">
                        <CommuniquesTag items = {Communiques}/>   
                    </div>
                    <div  style={{textAlign : "center"}}>
                        <a className="btn w-25 hover-up" style={{minWidth : "400px"}}>
                            {translate("Tous les communiqués de presse")}
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h3 style={{textAlign : "center"}}>{translate("Les Nouveautés")} : </h3>
                    <div className="col-12 mt-25">
                        <div className="row related-products position-relative">
                            <NouveautesProducts Products = {Products_Nouveautes} translate = {translate} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps (context) {

    // Import qs
    const qs = require("qs")

    // Query products to show in home page
    const queryProducts = qs.stringify({
        populate : [
            "images",
            "exposant",
            "typeprod"
        ],
        filters : {
            Afficher_dans_homepage : {$eq : true}
        },
        locale: context["locale"]
    })
    const productsRes = await axios.get(`http://localhost:1337/api/produits?${queryProducts}`)  
 

    // Query superunivers
    const querySuperunivers = qs.stringify({
        populate : ["image"],
        locale: context["locale"]
    })
    const superuniversRes = await axios.get(`http://localhost:1337/api/superuniverss?${querySuperunivers}`)
 
    // Query communiques
    const queryCommuniques = qs.stringify({
        populate : ["image"],
        locale: context["locale"]
    })
    const communiquesRes = await axios.get(`http://localhost:1337/api/communiques?${queryCommuniques}`)

    // Query products Nouveautes
    const queryProductsNouveautes = qs.stringify({
        populate : [
            "images",
            "exposant",
            "typeprod"
        ],
        filters : {
            NOUVEAUTE : {$eq : 1}
        },
        locale: context["locale"]
    })
    const productsNouveautesRes = await axios.get(`http://localhost:1337/api/produits?${queryProductsNouveautes}`)  

    
    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["home"])),
            Superuniverss : superuniversRes["data"]["data"],
            Products_Home : productsRes["data"]["data"],
            Communiques : communiquesRes["data"]["data"],
            Products_Nouveautes : productsNouveautesRes["data"]["data"]
        }
    }
}
