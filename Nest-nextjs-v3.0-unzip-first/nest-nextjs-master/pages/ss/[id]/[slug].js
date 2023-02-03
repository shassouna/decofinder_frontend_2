// Import from components
import GlobalFunctions from "../../../components/elements2/GlobalFunctions"
import Sidebar from "../../../components/elements2/sideBar"
import SelectionsSlider from "../../../components/elements2/intro3"
import SingleProduct from "../../../components/elements2/SingleProduct"
import Revendeur from "../../../components/elements2/Revendeur"
import CommuniquesTag from "../../../components/elements2/Communiques"

// Import from react 
import { useState, useEffect } from "react"
// Import from Next
import { useRouter } from "next/router"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Import from libraries
import axios from "axios"

const marquesFilter = "marques"
const pricesFilter = "prices"
const designersFilter = "designers"
const stylesFilter = "styles"
const couleursFilter = "couleurs"
const materiauxFilter = "materiaux"
const motifsFilter = "motifs"

const Exposant = (props) => {
    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("exposant")

    // States
    const [Exposant, setExposant] = useState(props["Exposant"])
    const [Activites, setActivites] = useState(props["Activites"])
    const [Products, setProducts] = useState(props["Products"])
    const [Revendeurs, setRevendeurs] = useState(props["Revendeurs"])

    const [Marques, setMarques] = useState(props["marques"])  
    const [Prices, setPrices] = useState(props["prices"])  
    const [Designers, setDesigners] = useState(props["designers"])  
    const [Styles, setStyles] = useState(props["styles"])
    const [Couleurs, setCouleurs] = useState(props["couleurs"])
    const [Motifs, setMotifs] = useState(props["motifs"])
    const [Materiaux, setMateriaux] = useState(props["materiaux"])
    const [Communiques, setCommuniques] = useState(props["Communiques"])

    const [filter, setFilter] = useState(1)

    const [executeOthersUseEffect, setExecuteOthersUseEffect] = useState(false)

    useEffect(()=>{

        // initialize sidebar checkboxs 
        Prices.forEach(item => {
            if(props["filterPrices"][0]==item["item"][0]&&props["filterPrices"][1]==item["item"][1]){
                item["checked"]=true
            }
        })
        Marques.forEach(item => {
            if(props["filterMarques"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })
        Designers.forEach(item => {
            if(props["filterDesigners"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })
        Styles.forEach(item => {
            if(props["filterStyles"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })
        Couleurs.forEach(item => {
            if(props["filterCouleurs"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })
        Motifs.forEach(item => {
            if(props["filterMotifs"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })
        Materiaux.forEach(item => {
            if(props["filterMateriaux"].includes(item["item"]["id"])){
                item["checked"]=true
            }
        })

        // Initialize products to filter 
        let productsFiltered = [...props["Products"]]

        // Filter products
        if(props["filterPrices"].length>0){
            productsFiltered=productsFiltered.filter(product => parseFloat(product["attributes"]["TARIF_PUB"])>=props["filterPrices"][0] && parseFloat(product["attributes"]["TARIF_PUB"])<=props["filterPrices"][1])
        }

        if(props["filterMarques"].length>0){
            productsFiltered=productsFiltered.filter(product=>props["filterMarques"].includes(product["id"]))
        }

        if(props["filterDesigners"].length>0){
            productsFiltered=productsFiltered.filter(product=>props["filterDesigners"].includes(product["id"]))
        }

        if(props["filterStyles"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["style"]&&product["attributes"]["style"]["data"]){
                    return props["filterStyles"].includes(product["attributes"]["style"]["data"]["id"])
                }
            })
        }

        if(props["filterCouleurs"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["couleur"]&&product["attributes"]["couleur"]["data"]){
                    return props["filterCouleurs"].includes(product["attributes"]["couleur"]["data"]["id"])
                }
            })
        }

        if(props["filterMotifs"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["motif"]&&product["attributes"]["motif"]["data"]){
                    return props["filterMotifs"].includes(product["attributes"]["motif"]["data"]["id"])
                }
            })
        }   
        
        if(props["filterMateriaux"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["materiau"]&&product["attributes"]["materiau"]["data"]){
                    return props["filterMateriaux"].includes(product["attributes"]["materiau"]["data"]["id"])
                }
            })
        }  

        // Update products state
        setProducts([...productsFiltered])

        // Router management
        if(productsFiltered.length != props["Products"]){

            const obj ={...router.query}
            
            obj["prix"]=props["filterPrices"]
            obj["couleur"]=props["filterCouleurs"]
            obj["motif"]=props["filterMotifs"]
            obj["style"]=props["filterStyles"]
            obj["materiau"]=props["filterMateriaux"]
            obj["designer"]=props["filterDesigners"]
            obj["marque"]=props["filterMarques"]

            delete obj["id"]
            delete obj["slug"]

            router.push({
                pathname: `/ss${router.query["id"]}/${router.query["slug"]}`,
                query: {...obj}
              }, 
              undefined, { shallow: true }
            )

        }        

        // autorize other effects 
        setExecuteOthersUseEffect(true)

    },[])

    useEffect(()=>{

        if (executeOthersUseEffect){
            // Get filters ids
            let filterPrices = Prices.find(price=>price["checked"])?Prices.find(price=>price["checked"])["item"]:[]
            let filterMarques = Marques.filter(marque=>marque["checked"]).map(marque=>marque["item"]["id"])
            let filterDesigners = Designers.filter(designer=>designer["checked"]).map(designer=>designer["item"]["id"])
            let filterStyles = Styles.filter(style=>style["checked"]).map(style=>style["item"]["id"])
            let filterCouleurs = Couleurs.filter(couleur=>couleur["checked"]).map(couleur=>couleur["item"]["id"])
            let filterMotifs = Motifs.filter(motif=>motif["checked"]).map(motif=>motif["item"]["id"])
            let filterMateriaux = Materiaux.filter(materiau=>materiau["checked"]).map(materiau=>materiau["item"]["id"])

            // Initialize products to filter 
            let productsFiltered = [...props["Products"]]

            // Filter products
            if(filterPrices.length>0){
                productsFiltered=productsFiltered.filter(product => parseFloat(product["attributes"]["TARIF_PUB"])>=filterPrices[0] && parseFloat(product["attributes"]["TARIF_PUB"])<=filterPrices[1])
            }

            if(filterMarques.length>0){
                productsFiltered=productsFiltered.filter(product=>filterMarques.includes(product["id"]))
            }

            if(filterDesigners.length>0){
                productsFiltered=productsFiltered.filter(product=>filterDesigners.includes(product["id"]))
            }

            if(filterStyles.length>0){
                productsFiltered=productsFiltered.filter(product=>{
                    if(product["attributes"]["style"]&&product["attributes"]["style"]["data"]){
                        return filterStyles.includes(product["attributes"]["style"]["data"]["id"])
                    }
                })
            }

            if(filterCouleurs.length>0){
                productsFiltered=productsFiltered.filter(product=>{
                    if(product["attributes"]["couleur"]&&product["attributes"]["couleur"]["data"]){
                        return filterCouleurs.includes(product["attributes"]["couleur"]["data"]["id"])
                    }
                })
            }

            if(filterMotifs.length>0){
                productsFiltered=productsFiltered.filter(product=>{
                    if(product["attributes"]["motif"]&&product["attributes"]["motif"]["data"]){
                        return filterMotifs.includes(product["attributes"]["motif"]["data"]["id"])
                    }
                })
            }   
            
            if(filterMateriaux.length>0){
                productsFiltered=productsFiltered.filter(product=>{
                    if(product["attributes"]["materiau"]&&product["attributes"]["materiau"]["data"]){
                        return filterMateriaux.includes(product["attributes"]["materiau"]["data"]["id"])
                    }
                })
            }  

            // Update products state
            setProducts([...productsFiltered])

            // Router management
            if(productsFiltered.length != props["Products"]){
                
                const obj ={...router.query}
                
                obj["prix"]=filterPrices
                obj["couleur"]=filterCouleurs
                obj["motif"]=filterMotifs
                obj["style"]=filterStyles
                obj["materiau"]=filterMateriaux
                obj["designer"]=filterDesigners
                obj["marque"]=filterMarques

                delete obj["id"]
                delete obj["slug"]

                router.push({
                    pathname: `/ss${router.query["id"]}/${router.query["slug"]}`,
                    query: {...obj}
                  }, 
                  undefined, { shallow: true }
                )
            }
        }

    },[Couleurs, Motifs, Styles, Designers, Marques, Materiaux, Prices])

    /*---------------------------------------------------Hooks end---------------------------------------------------*/

/*---------------------------------------------------Functions begin---------------------------------------------------*/

    const handleChoseFilter = (value) => {

        setFilter(value)
        router.push({
            pathname: `/ss${router.query["id"]}/${router.query["slug"]}`,
          }, 
          undefined, { shallow: true }
        )

    }
    // Update user filters
    const handleFilter = (id, filterKey) => {
        
        if(filterKey==couleursFilter){
            const itemsLocal = [...Couleurs]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setCouleurs([...itemsLocal])
        }
        else if(filterKey==motifsFilter){
            const itemsLocal = [...Motifs]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setMotifs([...itemsLocal])
        }
        else if(filterKey==stylesFilter){
            const itemsLocal = [...Styles]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setStyles([...itemsLocal])
        }
        else if(filterKey==designersFilter){
            const itemsLocal = [...Designers]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setDesigners([...itemsLocal])
        }
        else if(filterKey==marquesFilter){
            const itemsLocal = [...Marques]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setMarques([...itemsLocal])
        }
        else if(filterKey==materiauxFilter){
            const itemsLocal = [...Materiaux]
            itemsLocal.find(item=>item["item"]["id"]==id)["checked"]=!itemsLocal.find(item=>item["item"]["id"]==id)["checked"]
            setMateriaux([...itemsLocal])
        }
        else if(filterKey==pricesFilter){
            const itemsLocal = [...Prices]
            itemsLocal.filter(item=>item["id"]!=id).forEach(item => item["checked"] = false)
            itemsLocal.find(item=>item["id"]==id)["checked"]=!itemsLocal.find(item=>item["id"]==id)["checked"]
            setPrices([...itemsLocal])
        }

    }
/*---------------------------------------------------Functions begin---------------------------------------------------*/

    return (
            <div className="container custom mt-50">
                <div className="row flex-row mb-100">
                    <div className="col-lg-1-5">
                        {/* Exposant informations begin */}
                        <div className="sidebar-widget widget-store-info mb-30 bg-3 border-0">
                            <div className="vendor-logo mb-30">
                                <img src={`/assets/imgs/vendor/vendor-1.png`} alt="" />
                            </div>
                            <div className="vendor-info">
                                <div className="ollow-social mb-20">
                                    <h6 className="mb-5">{translate("Suivez-nous")}</h6>
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
                                    <h6 className="mb-5">{translate("Coordonnées")}</h6>
                                    <ul className="ont-sm mb-20">
                                        <li><strong>{translate("Adresse")} : </strong> <span>{Exposant["attributes"]["ADRESSE"]}</span></li>
                                        <li><span>{Exposant["attributes"]["CP"]}</span></li>
                                        <li><span>{Exposant["attributes"]["VILLE"]}</span></li>
                                        <li><span>{Exposant["attributes"]["pay"]["data"]&&Exposant["attributes"]["pay"]["data"]["attributes"]["LIB"]}</span></li>
                                        <li><strong>{translate("Appelez-nous")} : </strong><span>{Exposant["attributes"]["TELEPHONE"]}</span></li>
                                        <li><strong>{translate("Fax")} : </strong><span>{Exposant["attributes"]["TELEPHONE"]}</span></li>
                                        <li><strong>{translate("Show Room")} : </strong><span>{Exposant["attributes"]["SHOW_ROOM"]}</span></li>
                                    </ul>
                                    <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("Documentation")}</a></Link>
                                    <br/>
                                    <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("Contacter l'entreprise")}</a></Link>
                                    <br/>
                                    <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("Points de vente")}</a></Link>
                                    <br/>
                                    <Link href="/vendor/1"><a className="btn btn-xs" style={{width:"100%", display:"flex", justifyContent:"center"}}>{translate("Visiter le site")}</a></Link>
                                </div>
                            </div>
                        </div>
                        {/* Exposant informations end */}
                    </div>
                    <div className="col-lg-4-5">
                        <div className="border p-md-4 p-30 border-radius cart-totals">
                            {/* Exposant description begin */}
                            <div className="heading_s1 mb-3">
                                <h4 className="mb-10" style={{minWidth:"50px", width:"30%"}}>{Exposant["attributes"]["NOM"]}</h4>
                                {Activites.length>0&&
                                <>
                                    {translate("Activités")} :
                                    <span>
                                        {Activites.map((activite, index)=>index  == Activites.length-1? activite["attributes"]["LIB"]: activite["attributes"]["LIB"]+", ")}
                                    </span>
                                </>
                                }
                                <div className="mt-10 mb-10">{Exposant["attributes"]["SLOGAN"]}</div>
                                <div dangerouslySetInnerHTML={{__html: Exposant["attributes"]["DESC"]}}/>
                            </div>
                            {/* Exposant description end */}

                            {/* list of selections begin */}
                            <section className="mb-100">
                                    <h2 className="mb-30" style={{textAlign:"center"}}>{translate("Découvrez nos sélections")} :</h2>
                                    <div className="home-slide-cover">
                                        <SelectionsSlider />
                                    </div>
                            </section>
                            {/* list of selections end */}
                        </div>
                    </div>
                </div>
                {/* filters begin */}
                <div className="row mb-50">
                    <div className="title">
                        <ul className="list-inline nav nav-tabs links">
                            <li className="list-inline-item nav-item">
                                <a className={filter==1?"nav-link active":"nav-link"} onClick={()=>handleChoseFilter(1)}>{translate("Produits")}</a>
                            </li>
                            <li className="list-inline-item nav-item">
                                <a className={filter==2?"nav-link active":"nav-link"} onClick={()=>handleChoseFilter(2)}>{translate("Marques")}</a>
                            </li>
                            <li className="list-inline-item nav-item">
                                <a className={filter==3?"nav-link active":"nav-link"} onClick={()=>handleChoseFilter(3)}>{translate("Catalogues")}</a>
                            </li>
                            <li className="list-inline-item nav-item">
                                <a className={filter==4?"nav-link active":"nav-link"} onClick={()=>handleChoseFilter(4)}>{translate("News")}</a>
                            </li>
                            <li className="list-inline-item nav-item">
                                <a className={filter==5?"nav-link active":"nav-link"} onClick={()=>handleChoseFilter(5)}>{translate("Newsletters")}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* filters end */}

                {/* case Produits or filter number 1 begin*/}
                {filter == 1 &&
                <div className="row mb-50">
                    {/* SideBar filters begin */}
                    <div className="col-lg-3 primary-sidebar sticky-sidebar">
                        <Sidebar 
                        Marques = {Marques}
                        Prices = {Prices}
                        Designers = {Designers}
                        Styles = {Styles}
                        Couleurs = {Couleurs}
                        Motifs = {Motifs}
                        Materiaux = {Materiaux}
                        handleFilter = {handleFilter}
                        marquesFilter = {marquesFilter}
                        pricesFilter = {pricesFilter}
                        designersFilter = {designersFilter}
                        stylesFilter = {stylesFilter}
                        couleursFilter = {couleursFilter}
                        materiauxFilter = {materiauxFilter}
                        motifsFilter = {motifsFilter}
                        translate = {translate}
                        />
                    </div>
                    {/* SideBar filters end */}
                    <div className="col-lg-9">
                        {/* list of products begin */}
                            <div className="row product-grid-3">
                                {
                                Products.length === 0 && (
                                    <h3>{translate("Pas de produits")}</h3>
                                )}
                                {
                                Products.length > 0 && <h2 className="mb-30">{translate("PRODUITS VENDUS PAR") + " " + Exposant["attributes"]["NOM"]} : </h2>
                                }    
                                {
                                Products.length > 0 && Products.map((product, i) => (
                                    <div
                                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        key={i}
                                    >
                                        <SingleProduct product={product} />
                                    </div>
                                ))}
                            </div>
                        {/* list of products end */}
                    </div>
                </div>
                }
                {/* case Produits or filter number 1 end*/}

                {/* case Marques or filter number 2 begin*/}
                {filter == 2 &&
                <div className="row vendor-grid">
                    <h3 className="mb-20">{translate("Marques Revendues")} : </h3>
                    {Revendeurs.map((item, i) => (                         
                        <Revendeur item={item} translate={translate} key={item["id"]+i}/>
                    ))}
                </div>
                }
                {/* case Produits or filter number 1 end*/}

                {/* communiques begin*/}
                {filter == 4 &&
                <div className="row">
                    <div className="col-lg-12">
                        {
                        Communiques.length === 0 && (
                            <h3>{translate("Pas de communiqués")}</h3>
                        )}
                        {
                        Communiques.length > 0 &&
                        <>
                            <h3 className="mb-20">{translate("Communiqués de presse")} : </h3>
                            <div className="loop-grid loop-list pr-30">
                                <CommuniquesTag items = {Communiques}/>   
                            </div>
                        </>
                        }
                    </div>
                </div>
                }
                {/* communiques end*/}

                {/* newsletters begin*/}
                {filter == 5 &&
                <div className="row">
                    <div className="col-lg-12">
                        <h3>{translate("Pas de newsletters")}</h3>
                    </div>
                </div>
                }
                {/* newsletters end*/}
            </div>
    )
}

export default Exposant

export async function getServerSideProps (context) {

    let findExposant = undefined

    let marques = []
    let prices = []
    let designers = []
    let styles = []
    let couleurs = []
    let motifs = []
    let materiaux = []

    let filterMarques = []
    let filterPrices = []
    let filterDesigners = []
    let filterStyles = []
    let filterCouleurs = []
    let filterMotifs = []
    let filterMateriaux = []

    // Import qs
    const qs = require("qs")

    // Query exposant
    const query = qs.stringify({

      populate: [
        // pays
        "pay",
        // activites
        "typeexposants",
        // revendeurs
        "revendeurs",
        // communiques
        "communiques.image",
        // products of exposant
        "produits.exposant",
        "produits.typeprod", 
        "produits.images",
        "produits.style",
        "produits.couleur",
        "produits.motif",
        "produits.materiau",
        // Internationalization
        // pays
        "localizations.pay",
        // activites
        "localizations.typeexposants",
        // revendeurs
        "localizations.revendeurs",
        // communiques
        "localizations.communiques.image",
        // products of exposant
        "localizations.produits.exposant",
        "localizations.produits.typeprod", 
        "localizations.produits.images",
        "localizations.produits.style",
        "localizations.produits.couleur",
        "localizations.produits.motif",
        "localizations.produits.materiau"
      ]

    })
    const exposantRes = await axios.get(`http://localhost:1337/api/exposants/${context["params"]["id"]}?${query}`)

    // get localization typeprod
    findExposant = exposantRes["data"]["data"]["attributes"]["localizations"]["data"].find(e=>e["attributes"]["locale"]==context["locale"])
    if(!findExposant) findExposant = exposantRes["data"]["data"]
  
    findExposant["attributes"]["produits"]["data"].forEach(product => {
        marques.push(product)
        prices.push(product)
        designers.push(product)
        product["attributes"]["style"]&&styles.push(product["attributes"]["style"]["data"])
        product["attributes"]["couleur"]&&couleurs.push(product["attributes"]["couleur"]["data"])
        product["attributes"]["motif"]&&motifs.push(product["attributes"]["motif"]["data"])
        product["attributes"]["materiau"]&&materiaux.push(product["attributes"]["materiau"]["data"])  
    })
    marques=GlobalFunctions["handleCountProductsOfEachFilter"](marques,"MARQUE")
    prices=GlobalFunctions["handleCountProductsOfEachPrice"](prices,"TARIF_PUB", [0,150,350,500,750,1000,2000,1000000])
    designers=GlobalFunctions["handleCountProductsOfEachFilter"](designers,"DESIGNER")
    styles=GlobalFunctions["handleCountProductsOfEachFilter"](styles,"LIB")
    couleurs=GlobalFunctions["handleCountProductsOfEachFilter"](couleurs,"LIB")
    motifs=GlobalFunctions["handleCountProductsOfEachFilter"](motifs,"LIB")
    materiaux=GlobalFunctions["handleCountProductsOfEachFilter"](materiaux,"LIB")

    // Get list of filters from url 
    if(context.query.marque){
        filterMarques = typeof context.query.marque == "string" ? [parseInt(context.query.marque)] : context.query.marque.map(element=>parseInt(element))
    }
    if(context.query.designer){
        filterDesigners = typeof context.query.designer == "string" ? [parseInt(context.query.designer)] : context.query.designer.map(element=>parseInt(element))
    }
    if(context.query.prix){
        filterPrices = typeof context.query.prix == "string" ? [parseInt(context.query.prix)] : context.query.prix.map(element=>parseInt(element))
    }
    if(context.query.style){
        filterStyles = typeof context.query.style == "string" ? [parseInt(context.query.style)] : context.query.style.map(element=>parseInt(element))
    }
    if(context.query.couleur){
        filterCouleurs = typeof context.query.couleur == "string" ? [parseInt(context.query.couleur)] : context.query.couleur.map(element=>parseInt(element))
    }
    if(context.query.motif){
        filterMotifs = typeof context.query.motif == "string" ? [parseInt(context.query.motif)] : context.query.motif.map(element=>parseInt(element))
    }
    if(context.query.materiau){
        filterMateriaux = typeof context.query.materiau == "string" ? [parseInt(context.query.materiau)] : context.query.materiau.map(element=>parseInt(element))
    }

    return {
      props: {
        ...(await serverSideTranslations(context["locale"],["exposant"])),
        Exposant : findExposant,
        Activites : findExposant["attributes"]["typeexposants"]["data"],
        Revendeurs : findExposant["attributes"]["revendeurs"]["data"],
        Products : findExposant["attributes"]["produits"]["data"],
        Communiques : findExposant["attributes"]["communiques"]["data"],
        marques : marques,
        prices : prices,
        designers : designers,
        styles : styles,
        couleurs : couleurs,
        motifs : motifs,
        materiaux : materiaux,
        filterMarques : filterMarques,
        filterDesigners : filterDesigners,
        filterPrices : filterPrices,
        filterStyles : filterStyles,
        filterCouleurs : filterCouleurs,
        filterMotifs : filterMotifs,
        filterMateriaux : filterMateriaux
      }
  }
}
