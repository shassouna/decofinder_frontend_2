

import GlobalFunctions from "../../../components/elements2/GlobalFunctions";
import Sidebar from "../../../components/elements2/sideBar"
import Pagination from "../../../components/elements2/Pagination"
import Title from "../../../components/elements2/Title"
import SingleProduct from "../../../components/elements2/SingleProduct"
import Typeprod from "../../../components/elements2/typeprod"
import SelectionsSlider from "../../../components/elements2/intro3"
import axios from "axios"
// Import from react 
import { useState } from "react"

// Constantes
const limit = 5
const getPaginationGroup = [1,2,3,4,5]


function Category(props) {

    /* ------------------------- States ------------------------- */

    const [currentPage, setCurrentPage] = useState (1)
    const [Category, setCategory] = useState(props["Category"])
    const [Products, setProducts] = useState(props["Products"])
    const [Typeprods, setTypeprods] = useState(props["Typeprods"])
    const [Categories_Univers_Category, setCategories_Univers_Category] = useState(props["Categories_Univers_Category"])
    const [Univers_Category, setUnivers_Category] = useState(props["Univers_Category"])

    /* ------------------------- Functions ------------------------- */

    // Show next page (pagination)
    const next = () => {
        setCurrentPage((currentPage )=>currentPage + 1)   
    }

    // Show next page (pagination)
    const prev = () => {
        setCurrentPage((currentPage)=>currentPage - 1)
    }

    // Show selected page (pagination)
    const handleActive = (item) => {
        setCurrentPage(item)
    }

    return (
            Category && Typeprods && Products && Categories_Univers_Category && Univers_Category &&
            <>
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            {/* SideBar filters begin */}
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <Sidebar 
                                Category = {Category}
                                Univers_Category = {Univers_Category}
                                Categories_Univers_Category = {Categories_Univers_Category}
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
            </>
    )
}

export default Category

export async function getServerSideProps (context) {

    // Declarations 
    let categoryProducts = []
    const product_Props = {marques:[], prix:[], designers:[], styles:[], couleurs:[], motifs:[], materiaux:[]}

    // Import qs
    const qs = require('qs')

    // Query categories 
    const query = qs.stringify({

        populate: [
            // produits des typeprods
            "typeprods.produits.exposant", 
            "typeprods.produits.typeprod", 
            "typeprods.produits.images", 
            "typeprods.produits.style", 
            // produits de la categorie
            "produits.exposant",
            "produits.typeprod", 
            "produits.images",
            "produits.style",
            // produits de l'univers
            "univer.categories.typeprods.produits",

            "typeprods.image",
        ]
      }, 
      {
        encodeValuesOnly: true, // prettify URL
      })

    const categorieRes = await axios.get(`http://localhost:1337/api/categories/${context["params"]["id"]}?${query}`)

    // Get all products of category 
    categoryProducts = categoryProducts.concat(categorieRes["data"]["data"]["attributes"]["produits"]["data"])

    categorieRes["data"]["data"]["attributes"]["typeprods"]["data"]
    .map(e=>e["attributes"]["produits"]["data"])
    .forEach(tab => categoryProducts = categoryProducts.concat(tab))

    // Create filtres
    categoryProducts.forEach(product => {
        product_Props.marques.push(product)
        product_Props.prix.push(product)
        product_Props.designers.push(product)
        product['attributes']['style']&&product_Props.styles.push(product['attributes']['style'].data)
        product['attributes']['couleur']&&product_Props.couleurs.push(product['attributes']['couleur'].data)
        product['attributes']['motif']&&product_Props.motifs.push(product['attributes']['motif'].data)
        product['attributes']['materiau']&&product_Props.materiaux.push(product['attributes']['materiau'].data)  
    })

    product_Props.styles=GlobalFunctions["handleCountProductsOfEachFilter"](product_Props.styles,'LIB')

    console.log(product_Props.styles)

    return {
        props: {
            Category : categorieRes["data"]["data"],
            Typeprods : categorieRes["data"]["data"]["attributes"]["typeprods"]["data"],
            Products : categoryProducts,
            Univers_Category : categorieRes["data"]["data"]["attributes"]["univer"]["data"],
            Categories_Univers_Category : categorieRes["data"]["data"]["attributes"]["univer"]["data"]["attributes"]["categories"]["data"]
        }
    }
}
