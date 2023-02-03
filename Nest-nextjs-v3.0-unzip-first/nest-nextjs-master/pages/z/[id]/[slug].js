
// import libraries
import axios from 'axios'
// import from next
import Link from 'next/link'
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// import from react
import { useState } from 'react'
// import from components
import ThumbSlider from "../../../components/sliders/Thumb"
import DescriptionProduct from "../../../components/elements2/DescriptionProduct"
import RelatedSlider from "../../../components/sliders/Related"

const ProductId = (props) => {
    /*---------------------------------------------------Hooks begin---------------------------------------------------*/

    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("product")

    // States
    const [Product, setProduct] = useState(props["Product"])
    const [Exposant, setExposant] = useState(props["Exposant"])  
    const [Typeprod, setTypeprod] = useState(props["Typeprod"])
    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    return (
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-xl-10 col-lg-12 m-auto">
                      <div className="product-detail accordion-detail">
                        <div className="row mb-50  mt-30">
                            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                    <span className="zoom-icon">
                                        <i className="fi-rs-search"></i>
                                    </span>

                                    <div className="product-image-slider">
                                        <ThumbSlider product={Product} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12" style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                                <div className="detail-info  pr-30 pl-30">
                                    <img className="mb-10" id={Exposant["id"]} src={`http://localhost:1337${Exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`} />
                                    <br/>
                                    <strong>{Exposant["attributes"]["NOM"]}</strong>
                                    <h2 className="title-detail mt-10">{`${Typeprod["attributes"]["LIB"]} - ${Product["attributes"]["TITRE"]}`}</h2>
                                    <div className="clearfix product-price-cover">
                                        <div className="product-price primary-color float-left">
                                            <span className="current-price  text-brand">{Product["attributes"]["TARIF_PUB"]&&Product["attributes"]["TARIF_PUB"] + " €"}</span>
                                        </div>
                                    </div>

                                    <div className="short-desc mb-30">
                                        <p className="font-lg">{Product["attributes"]["DESC"]}</p>
                                    </div>
                                    <div className="vendor-info">

                                      <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("SITE WEB")}</a></Link>
                                      <br/>
                                      <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("QUESTION / DEVIS")}</a></Link>
                                      <br/>
                                      <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("POINTS DE VENTE")}</a></Link>
                                      <br/>
                                      <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("METTRE EN FAVORIS")}</a></Link>
                                    
                                      <div className="ollow-social mb-20 mt-40" style={{textAlign:"center"}}>
                                        <ul className="social-network">
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["TWITTER"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-tw.svg" alt="" />
                                                </a>
                                            </li>
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["FACEBOOK"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-fb.svg" alt="" />
                                                </a>
                                            </li>
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["INSTAGRAM"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-insta.svg" alt="" />
                                                </a>
                                            </li>
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["PINTEREST"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-pin.svg" alt="" />
                                                </a>
                                            </li>
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["YOUTUBE"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-youtube.svg" alt="" />
                                                </a>
                                            </li>
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["VIMEO"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-vimeo.svg" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                      </div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <>
                            <DescriptionProduct />
                            <div className="row mt-60">
                                <div className="col-12">
                                    <h3 className="section-title style-1 mb-30">Related products</h3>
                                </div>
                                <div className="col-12">
                                    <div className="row related-products position-relative">
                                        <RelatedSlider />
                                    </div>
                                </div>
                            </div>
                        </>
                      </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductId

export async function getServerSideProps (context) {

  // Declarations 
  let findProduct = undefined

  // Import qs
  const qs = require("qs")

  // Query exposant
  const query = qs.stringify({

    populate: [
      "images",
      "exposant.logo",
      "typeprod",
      "exposant.revendeurs",
      // Internationalization
      "localizations.images",
      "localizations.exposant.logo",  
      "localizations.typeprod", 
      "localizations.exposant.revendeurs", 
    ]

  })
  
  const productRes = await axios.get(`http://localhost:1337/api/produits/2?${query}`)

  findProduct = productRes["data"]["data"]
    
  return {
    props: {
      ...(await serverSideTranslations(context["locale"],["product"])),
      Product : findProduct,
      Exposant : findProduct["attributes"]["exposant"]["data"],
      Typeprod : findProduct["attributes"]["typeprod"]["data"],
    }
  }
}


