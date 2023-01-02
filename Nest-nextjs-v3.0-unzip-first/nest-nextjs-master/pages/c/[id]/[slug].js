

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
import { useRouter } from "next/router";

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
    // States
    const [currentPage, setCurrentPage] = useState (1)

    const [Category, setCategory] = useState(props["Category"])
    const [Products, setProducts] = useState(props["Products"])
    const [Typeprods, setTypeprods] = useState(props["Typeprods"])

    const [Categories_Univers_Category, setCategories_Univers_Category] = useState(props["Categories_Univers_Category"])
    const [Univers_Category, setUnivers_Category] = useState(props["Univers_Category"])

    const [Marques, setMarques] = useState(props["marques"])  
    const [Prices, setPrices] = useState(props["prices"])  
    const [Designers, setDesigners] = useState(props["designers"])  
    const [Styles, setStyles] = useState(props["styles"])
    const [Couleurs, setCouleurs] = useState(props["couleurs"])
    const [Motifs, setMotifs] = useState(props["motifs"])
    const [Materiaux, setMateriaux] = useState(props["materiaux"])


    useEffect(()=>{

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
            productsFiltered=productsFiltered.filter(product => parseFloat(product['attributes']['TARIF_PUB'])>=filterPrices[0] && parseFloat(product['attributes']['TARIF_PUB'])<=filterPrices[1])
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
            
            obj['prix']=filterPrices
            obj['couleur']=filterCouleurs
            obj['motif']=filterMotifs
            obj['style']=filterStyles
            obj['materiau']=filterMateriaux
            obj['designer']=filterDesigners
            obj['marque']=filterMarques

            router.push(
                {query: {...obj}},
                null, 
                {shallow : true}
            )
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
            <section className="mt-50 mb-50">
                <div className="container custom">
                    <div className="row">
                        {/* SideBar filters begin */}
                        <div className="col-lg-3 primary-sidebar sticky-sidebar">
                            <Sidebar 
                            Category = {Category}
                            Univers_Category = {Univers_Category}
                            Categories_Univers_Category = {Categories_Univers_Category}
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
                            />
                        </div>
                        {/* SideBar filters end */}

                        <div className="col-lg-9">
                            {/* list of typeproducts begin */}
                            <section className="mb-75">
                                <div className="shop-product-fillter">
                                    <Title elements={[Univers_Category["attributes"]["LIB"], Category["attributes"]["LIB"]]}/>
                                </div>
                                <div className="loop-grid">
                                    <div className="row">
                                        {Typeprods.map(typeprod => (
                                            <Typeprod key={typeprod["id"]} typeprod={typeprod}/>
                                        ))}
                                    </div>
                                </div>
                            </section>
                            {/* list of typeproducts end */}

                            {/* list of selections begin */}
                            <section className="mb-100">
                                    <h2 className="mb-30" style={{textAlign:"center"}}>Découvrez nos sélections :</h2>
                                    <div className="home-slide-cover">
                                        <SelectionsSlider />
                                    </div>
                            </section>
                            {/* list of selections end */}

                            {/* list of products begin */}
                            <section>
                                <div className="row product-grid-3">
                                    {Products.length === 0 && (
                                        <h3>Pas de produits</h3>
                                    )}
                                    <h2 className="mb-30">Découvrez tous les produits de la catégorie {Category["attributes"]["LIB"]} : </h2>
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
            </section>
    )
}

export default Category

export async function getServerSideProps (context) {

    // Declarations 
    let categoryProducts = []

    let marques = []
    let prices = []
    let designers = []
    let styles = []
    let couleurs = []
    let motifs = []
    let materiaux = []

    // Import qs
    const qs = require("qs")

    // Query categories 
    const query = qs.stringify({

        populate: [
            // products of typeprods
            "typeprods.produits.exposant", 
            "typeprods.produits.typeprod", 
            "typeprods.produits.images", 
            "typeprods.produits.style", 
            "typeprods.produits.couleur", 
            "typeprods.produits.motif", 
            "typeprods.produits.materiau", 
            "typeprods.produits.style", 
            // products of category
            "produits.exposant",
            "produits.typeprod", 
            "produits.images",
            "produits.style",
            "produits.couleur",
            "produits.motif",
            "produits.materiau",
            // products of univers
            "univer.categories.typeprods.produits",
            // typeprods
            "typeprods.image",
        ]
      })
    const categorieRes = await axios.get(`http://localhost:1337/api/categories/${context["params"]["id"]}?${query}`)

    // Get all products of category 
    categoryProducts = categoryProducts.concat(categorieRes["data"]["data"]["attributes"]["produits"]["data"])
    categorieRes["data"]["data"]["attributes"]["typeprods"]["data"]
    .map(e=>e["attributes"]["produits"]["data"])
    .forEach(tab => categoryProducts = categoryProducts.concat(tab))

    // Create filtres
    categoryProducts.forEach(product => {
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

    return {
        props: {
            Category : categorieRes["data"]["data"],
            Typeprods : categorieRes["data"]["data"]["attributes"]["typeprods"]["data"],
            Products : categoryProducts,
            Univers_Category : categorieRes["data"]["data"]["attributes"]["univer"]["data"],
            Categories_Univers_Category : categorieRes["data"]["data"]["attributes"]["univer"]["data"]["attributes"]["categories"]["data"],
            marques : marques,
            prices : prices,
            designers : designers,
            styles : styles,
            couleurs : couleurs,
            motifs : motifs,
            materiaux : materiaux,
        }
    }
}
