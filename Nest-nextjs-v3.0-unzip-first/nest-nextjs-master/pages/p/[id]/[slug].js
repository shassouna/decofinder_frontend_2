

// Import from components
import GlobalFunctions from "../../../components/elements2/GlobalFunctions";
import Sidebar from "../../../components/elements2/sideBar"
import Pagination from "../../../components/elements2/Pagination"
import Title from "../../../components/elements2/Title"
import SingleProduct from "../../../components/elements2/SingleProduct"
import Typeprod from "../../../components/elements2/typeprod"
import SelectionsSlider from "../../../components/elements2/intro3"
// Import from libraries
import axios from "axios"
// Import from react 
import { useState, useEffect } from "react"
// Import from Next
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// Constantes
const limit = 10
const getPaginationGroup = [1,2,3,4,5]
const marquesFilter = "marques"
const pricesFilter = "prices"
const designersFilter = "designers"
const stylesFilter = "styles"
const couleursFilter = "couleurs"
const materiauxFilter = "materiaux"
const motifsFilter = "motifs"

function Category(props) {

    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("typeprod")

    // States
    const [currentPage, setCurrentPage] = useState(1)

    const [Typeprod, setTypeprod] = useState(props["Typeprod"])
    const [Products, setProducts] = useState(props["Products"])

    const [Marques, setMarques] = useState(props["marques"])  
    const [Prices, setPrices] = useState(props["prices"])  
    const [Designers, setDesigners] = useState(props["designers"])  
    const [Styles, setStyles] = useState(props["styles"])
    const [Couleurs, setCouleurs] = useState(props["couleurs"])
    const [Motifs, setMotifs] = useState(props["motifs"])
    const [Materiaux, setMateriaux] = useState(props["materiaux"])

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
        console.log(productsFiltered)
        if(props["filterMarques"].length>0){
            productsFiltered=productsFiltered.filter(product=>props["filterMarques"].includes(product["id"]))
        }
        console.log(productsFiltered)
        // il faut vérifier que mle filtre c'est designer
        if(props["filterDesigners"].length>0){
            productsFiltered=productsFiltered.filter(product=>props["filterDesigners"].includes(product["id"]))
        }
        console.log(productsFiltered)
        if(props["filterStyles"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["style"]&&product["attributes"]["style"]["data"]){
                    return props["filterStyles"].includes(product["attributes"]["style"]["data"]["id"])
                }
            })
        }
        console.log(productsFiltered)
        if(props["filterCouleurs"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["couleur"]&&product["attributes"]["couleur"]["data"]){
                    return props["filterCouleurs"].includes(product["attributes"]["couleur"]["data"]["id"])
                }
            })
        }
        console.log(productsFiltered)
        if(props["filterMotifs"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["motif"]&&product["attributes"]["motif"]["data"]){
                    return props["filterMotifs"].includes(product["attributes"]["motif"]["data"]["id"])
                }
            })
        }   
        console.log(productsFiltered)        
        if(props["filterMateriaux"].length>0){
            productsFiltered=productsFiltered.filter(product=>{
                if(product["attributes"]["materiau"]&&product["attributes"]["materiau"]["data"]){
                    return props["filterMateriaux"].includes(product["attributes"]["materiau"]["data"]["id"])
                }
            })
        }  
        console.log(productsFiltered)
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
              pathname: `/p${router.query["id"]}/${router.query["slug"]}`,
              query: {...obj}
            }, 
            undefined, { shallow: true }
          )
        } 
    },[])
    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    /*---------------------------------------------------Functions begin---------------------------------------------------*/
    // Show next page (pagination)
    const next = () => {
        setCurrentPage((currentPage )=>currentPage + 1)   
    }
    // Show previous page (pagination)
    const prev = () => {
        setCurrentPage((currentPage)=>currentPage - 1)
    }
    // Show selected page (pagination)
    const handleActive = (item) => {
        setCurrentPage(item)
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
    /*---------------------------------------------------Functions end---------------------------------------------------*/

    return (
            <section className="mt-50 mb-50">
              <div className="container custom">
                  <div className="row">
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
                          <section>
                              <div className="row product-grid-3">
                                  {Products.length === 0 && (
                                      <h3>{translate("Pas de produits")}</h3>
                                  )}
                                  <h2 className="mb-30">{translate("Découvrez tous les produits de la catégorie") + " " + Typeprod["attributes"]["LIB"]} : </h2>
                                  {
                                  Products.slice((currentPage-1)*limit, currentPage*limit)
                                  .map((product, i) => (
                                      <div
                                          className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                          key={i}
                                      >
                                          <SingleProduct product={product} />
                                      </div>
                                  ))}
                              </div>
                          </section>
                          {/* list of products end */}

                      </div>
                  </div>
              </div>
          </section>
    )
}

export default Category

export async function getServerSideProps (context) {

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
    

    let findTypeprod = undefined

    // Import qs
    const qs = require("qs")

    // Query typeprod
    const query = qs.stringify({

      populate: [
          // products of typeprod
          "produits.exposant", 
          "produits.typeprod", 
          "produits.images", 
          "produits.style", 
          "produits.couleur", 
          "produits.motif", 
          "produits.materiau", 
          // products of category
          "categorie.typeprods.produits",
          "categorie.produits", 
          // internationalization
          // products of typeprod
          "localizations.produits.exposant",
          "localizations.produits.typeprod",
          "localizations.produits.images",
          "localizations.produits.style",
          "localizations.produits.couleur",
          "localizations.produits.motif",
          "localizations.produits.materiau",
          // products of category
          "localizations.categorie.typeprods.produits", 
          "localizations.categorie.produits", 
      ]
  })

    const typeprodRes = await axios.get(`http://localhost:1337/api/typeprods/6709?${query}`)

    // get localization typeprod
    findTypeprod = typeprodRes["data"]["data"]["attributes"]["localizations"]["data"].find(e=>e["attributes"]["locale"]==context["locale"])
    if(!findTypeprod) findTypeprod = typeprodRes["data"]["data"]

    // Create filtres
    findTypeprod["attributes"]["produits"]["data"].forEach(product => {
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
            ...(await serverSideTranslations(context["locale"],["typeprod"])),
            Typeprod : findTypeprod,
            Products : findTypeprod["attributes"]["produits"]["data"],
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
