
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
import ThumbSlider from "../../../components/elements2/Thumb"
import DescriptionProduct from "../../../components/elements2/DescriptionProduct"
import RelatedProducts from "../../../components/elements2/ProductsAssocie"

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
    const [Revendeurs_produit, setRevendeurs_produit] = useState(props["Revendeurs_produit"])
    const [Couleur, setCouleur] = useState(props["Couleur"])
    const [Style, setStyle] = useState(props["Style"])
    const [Motif, setMotif] = useState(props["Motif"])
    const [Materiau, setMateriau] = useState(props["Materiau"])
    const [Products_SameExposant_SameTypeprods, setProducts_SameExposant_SameTypeprods] = useState(props["Products_SameExposant_SameTypeprods"])
    const [Products_Exposant_Product, setProducts_Exposant_Product] = useState(props["Products_Exposant_Product"])
    const [Products_Typeprod_Product, setProducts_Typeprod_Product] = useState(props["Products_Typeprod_Product"])
    const [Images, setImages] = useState(props["Images"])

    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    return (
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-xl-10 col-lg-12 m-auto">
                      <div className="product-detail accordion-detail">
                        <div className="row mb-50  mt-30">
                            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                    <div className="product-image-slider">
                                        <ThumbSlider Images={Images} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12" style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                                <div className="detail-info  pr-30 pl-30">
                                {Exposant&&<img className="mb-10" id={Exposant["id"]} src={`http://localhost:1337${Exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`} />}
                                    <br/>
                                    {Exposant&&<strong>{Exposant["attributes"]["NOM"]}</strong>}
                                    {Typeprod&&<h2 className="title-detail mt-10">{`${Typeprod["attributes"]["LIB"]} - ${Product["attributes"]["TITRE"]}`}</h2>}
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
                                      {
                                      Exposant&&
                                        <ul className="social-network">
                                            {
                                            Exposant["attributes"]["TWITTER"]&&
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["TWITTER"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-tw.svg" alt="" />
                                                </a>
                                            </li>
                                            }
                                            {
                                            Exposant["attributes"]["FACEBOOK"]&&
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["FACEBOOK"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-fb.svg" alt="" />
                                                </a>
                                            </li>
                                            }
                                            {
                                            Exposant["attributes"]["INSTAGRAM"]&&    
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["INSTAGRAM"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-insta.svg" alt="" />
                                                </a>
                                            </li>
                                            }
                                            {
                                            Exposant["attributes"]["PINTEREST"]&&  
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["PINTEREST"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-pin.svg" alt="" />
                                                </a>
                                            </li>
                                            }
                                            {
                                            Exposant["attributes"]["YOUTUBE"]&&  
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["YOUTUBE"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-youtube.svg" alt="" />
                                                </a>
                                            </li> 
                                            }
                                            {
                                            Exposant["attributes"]["VIMEO"]&&
                                            <li className="hover-up">
                                                <a href={Exposant["attributes"]["VIMEO"]} target="_blank">
                                                    <img src="/assets/imgs/theme/icons/social-vimeo.svg" alt="" />
                                                </a>
                                            </li>
                                            }
                                        </ul>
                                      }
                                      </div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <>
                            <DescriptionProduct Product={Product} Couleur={Couleur} Style={Style} Motif={Motif} Materiau={Materiau} Exposant={Exposant} Revendeurs_produit={Revendeurs_produit} translate={translate}/>

                            {Products_Typeprod_Product.length>0&&
                            <div className="row mt-60">
                                <div className="col-12">
                                    <h3 className="section-title style-1 mb-30">{translate("Autres produits")+ " " +Typeprod["attributes"]["LIB"]}</h3>
                                </div>      
                                <div className="col-12">
                                    <div className="row related-products position-relative">
                                        <RelatedProducts Products = {Products_Typeprod_Product} translate = {translate} />
                                    </div>
                                </div>
                            </div>
                            }

                            {Products_Exposant_Product.length>0&&
                            <div className="row mt-60">
                                <div className="col-12">
                                    <h3 className="section-title style-1 mb-30">{translate("Toute la collection de")+ " " + Exposant["attributes"]["NOM"]}</h3>
                                </div>      
                                <div className="col-12">
                                    <div className="row related-products position-relative">
                                        <RelatedProducts Products = {Products_Exposant_Product} translate = {translate} />
                                    </div>
                                </div>
                            </div>
                            }

                            {Products_SameExposant_SameTypeprods.length>0&&
                            <div className="row mt-60">
                                <div className="col-12">
                                    <h3 className="section-title style-1 mb-30">{translate("Produits associés")}</h3>
                                </div>
                                <div className="col-12">
                                    <div className="row related-products position-relative">
                                        <RelatedProducts Products = {Products_SameExposant_SameTypeprods} translate = {translate} />
                                    </div>
                                </div>
                            </div>
                            }
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

  // Query produit 
  const query = qs.stringify({

    populate: [
      // product
      "couleur",
      "style",
      "motif",
      "materiau",
      "images",
      // typeprod
      "typeprod.produits.images",
      "typeprod.produits.exposant",
      "typeprod.produits.typeprod",
      // exposant
      "exposant.produits.images",
      "exposant.produits.exposant",
      "exposant.produits.typeprod",
      "exposant.revendeurs",
      "exposant.logo",
      // exposants revendeurs
      "exposants_revendeurs",
      // Internationalization
      // product
      "localizations.couleur",
      "localizations.style",
      "localizations.motif",
      "localizations.materiau",
      "localizations.images",
      // typeprod
      "localizations.typeprod.produits.images",
      "localizations.typeprod.produits.exposant",
      "localizations.typeprod.produits.typeprod",
      // exposant
      "localizations.exposant.produits.images",
      "localizations.exposant.produits.exposant",
      "localizations.exposant.produits.typeprod",
      "localizations.exposant.revendeurs",
      "localizations.exposant.logo",
      // exposants revendeurs
      "localizations.exposants_revendeurs",
    ]

  })

  const productRes = await axios.get(`http://localhost:1337/api/produits/${context["params"]["id"]}?${query}`)

  findProduct = productRes["data"]["data"]

  // Query produit Typeprod Exposant 
  let filters = {ID: {$ne : findProduct["id"]}, exposant:{}, typeprod:{}}

  if(findProduct["attributes"]["exposant"]["data"]){
    filters["exposant"]["ID"] = {$eq:findProduct["attributes"]["exposant"]["data"]["id"]}
  }

  if(findProduct["attributes"]["typeprod"]["data"]){
    filters["typeprod"]["ID"] = {$eq:findProduct["attributes"]["typeprod"]["data"]["id"]}
  }

  const queryExposantTypeProd = qs.stringify(
    {
    populate: [
      // product
      "images",
      // typeprod
      "typeprod",
      // exposant
      "exposant",

    ],
        filters : filters
    }
  )
  const exposantTypeprodRes = await axios.get(`http://localhost:1337/api/produits?${queryExposantTypeProd}`) 

  return {
    props: {
      ...(await serverSideTranslations(context["locale"],["product"])),
      Product : findProduct,
      Exposant : findProduct["attributes"]["exposant"]["data"],
      Typeprod : findProduct["attributes"]["typeprod"]["data"],
      Images : findProduct["attributes"]["images"]["data"],
      Revendeurs_produit : findProduct["attributes"]["exposants_revendeurs"]["data"],
      Couleur : findProduct["attributes"]["couleur"]["data"],
      Style : findProduct["attributes"]["style"]["data"],
      Motif : findProduct["attributes"]["motif"]["data"],
      Materiau : findProduct["attributes"]["materiau"]["data"],
      Products_SameExposant_SameTypeprods : exposantTypeprodRes["data"]["data"],
      Products_Exposant_Product : findProduct["attributes"]["exposant"]["data"]?findProduct["attributes"]["exposant"]["data"]&&findProduct["attributes"]["exposant"]["data"]["attributes"]["produits"]["data"]:[],
      Products_Typeprod_Product : findProduct["attributes"]["typeprod"]["data"]?findProduct["attributes"]["typeprod"]["data"]&&findProduct["attributes"]["typeprod"]["data"]["attributes"]["produits"]["data"]:[],
    }
  }
}


