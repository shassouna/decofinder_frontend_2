// Import from react 
import { useState, useEffect } from "react"
// Import from Next
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Import from libraries
import axios from "axios"

const Products = (props) => {
    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Translations
    const {t : translate} = useTranslation("exposant")

    // States
    const [Exposant, setExposant] = useState(props["Exposant"])
    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    return (

          <section className="mt-50 mb-50">
            <div className="row flex-row-reverse">
              <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                <div className="sidebar-widget widget-store-info mb-30 bg-3 border-0">
                  <div className="vendor-logo mb-30">
                      <img src={`/assets/imgs/vendor/vendor-1.png`} alt="" />
                  </div>
                  <div className="vendor-info">
                      <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                      </div>
                      <h4 className="mb-5"><Link href="/vendor/1"><a className="text-heading">{Exposant["attributes"]["NOM"]}</a></Link></h4>


                      <div className="vendor-des mb-30">
                          <p className="ont-sm text-heading">Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</p>
                      </div>
                      <div className="ollow-social mb-20">
                          <h6 className="mb-15">{translate("Suivez-nous")}</h6>
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

                      <div className="vendor-info">
                          <ul className="ont-sm mb-20">
                              <li><strong>{translate("Adresse")} : </strong> <span>{Exposant["attributes"]["ADRESSE"]}</span></li>
                              <li><strong>{translate("Appelez-nous")} : </strong><span>{Exposant["attributes"]["TELEPHONE"]}</span></li>
                              <li><strong>{translate("Fax")} : </strong><span>{Exposant["attributes"]["TELEPHONE"]}</span></li>
                              <li><strong>{translate("Show Room")} : </strong><span>{Exposant["attributes"]["SHOW_ROOM"]}</span></li>
                          </ul>
                          <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%"}}>Documentation <i className="i-rs-arrow-small-right"></i></a></Link>
                          <br/><br/>
                          <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%"}}>Contacter l'entreprise <i className="i-rs-arrow-small-right"></i></a></Link>
                          <br/><br/>
                          <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%"}}>Points de vente <i className="i-rs-arrow-small-right"></i></a></Link>
                          <br/><br/>
                          <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%"}}>Visiter le site <i className="i-rs-arrow-small-right"></i></a></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Products

export async function getServerSideProps (context) {

    let findExposant = undefined

    // Import qs
    const qs = require("qs")

    // Query exposant
    const query = qs.stringify({

      populate: [
        "localizations"
      ]

    })
    const exposantRes = await axios.get(`http://localhost:1337/api/exposants/${context["params"]["id"]}?${query}`)

    // get localization typeprod
    findExposant = exposantRes["data"]["data"]["attributes"]["localizations"]["data"].find(e=>e["attributes"]["locale"]==context["locale"])
    if(!findExposant) findExposant = exposantRes["data"]["data"]
    
    return {
      props: {
        ...(await serverSideTranslations(context["locale"],["exposant"])),
        Exposant : findExposant
      }
  }
}
