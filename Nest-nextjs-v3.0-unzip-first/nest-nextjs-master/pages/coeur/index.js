
// Import from components
import GlobalFunctions from "../../components/elements2/GlobalFunctions"
import Sidebar from "../../components/elements2/sideBar"
import Title from "../../components/elements2/Title"
import SingleProduct from "../../components/elements2/SingleProduct"
import Pagination from "../../components/elements2/Pagination"
// Import from react
import  {useState, useEffect} from "react"
// Import from libraries
import axios from "axios"

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

function Jury(props) {

    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("coeur")

    // States
    const [currentPage, setCurrentPage] = useState(1)

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
                    query: {...obj}
                  }, 
                  undefined, { shallow: true }
                )
            }
        }

    },[Couleurs, Motifs, Styles, Designers, Marques, Materiaux, Prices])
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
            <div className="container custom mt-50">
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
                        marquesFilter = {marquesFilter}
                        pricesFilter = {pricesFilter}
                        designersFilter = {designersFilter}
                        stylesFilter = {stylesFilter}
                        couleursFilter = {couleursFilter}
                        materiauxFilter = {materiauxFilter}
                        motifsFilter = {motifsFilter}
                        handleFilter = {handleFilter}
                        translate = {translate}
                        />
                    </div>
                    {/* SideBar filters end */}

                    <div className="col-lg-9">
                        {/* list of products begin */}
                        <section>
                            <div className="shop-product-fillter">
                                <Title elements={[translate("Coups de coeur")]}/>
                            </div>
                            <div className="row product-grid-3">
                                {Products.length === 0 && (
                                    <h2>{translate("Pas de produits")}</h2>
                                )}
                                {
                                Products.slice((currentPage-1)*limit, currentPage*limit)
                                .map((product, i) => (
                                    <div
                                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                        key={i}
                                    >
                                        <SingleProduct product={product} translate = {translate}/>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* list of products end */}

                        {/* pagination begin */}
                        <section className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                            <Pagination
                                getPaginationGroup={getPaginationGroup}
                                currentPage={currentPage}
                                next={next}
                                prev={prev}
                                handleActive={handleActive}
                            />
                        </section>
                        {/* pagination end */}
                    </div>
                </div>
            </div>
    )
}

export default Jury

export async function getServerSideProps (context) {

    // Declarations 
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

    // Query categories 
    const query = qs.stringify({

        populate: [
            "exposant", 
            "typeprod", 
            "images", 
            "style", 
            "couleur", 
            "motif", 
            "materiau"
        ],
        filters: {        
            COUP_DE_COEUR : { $eq: 1 } 
        },
        locale: context["locale"]
    })
    const resProducts = await axios.get(`http://localhost:1337/api/produits?${query}`)

    // Create filtres
    resProducts["data"]["data"].forEach(product => {
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
            ...(await serverSideTranslations(context["locale"],["coeur"])),
            Products : resProducts["data"]["data"],
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
