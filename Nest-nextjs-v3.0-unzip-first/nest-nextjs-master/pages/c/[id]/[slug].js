import BlogGrid from "../../../components/elements2/categorysGrid"
import Sidebar from "../../../components/elements2/sideBar"
import Layout from "../../../components/layout/Layout"
import Pagination from "../../../components/elements2/Pagination"
import Title from "../../../components/elements2/Title"
// Import from react 
import { useState } from "react"
function PageBlogGrid() {

    /* ------------------------- States Début ------------------------- */

    const [currentPage, setCurrentPage] = useState (1)
    const [pages, setPages] = useState ([1,2,3,4,5])
    /* ------------------------- States Fin ------------------------- */


    /* ------------------------- functions Début ------------------------- */

    // Affichage de la page suivante (Gestion pagination)
    const next = () => {
        if(pages.length > currentPage ){
            setCurrentPage((currentPage )=>currentPage + 1)   
        }
    }

    // Affichage de la page précédente (Gestion pagination)
    const prev = () => {
        setCurrentPage((currentPage)=>currentPage - 1)
    }

    // Affichage de la page choisi (Gestion pagination)
    const handleActive = (item) => {
        setCurrentPage(item)
    }

    // Mise à jour du nombre des produits affichés par page
    const selectChange = (e) => {
        setCurrentPage(1)
    }

    /* ------------------------- functions Fin ------------------------- */

    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Grid">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <Sidebar />
                            </div>
                            <div className="col-lg-9">
                                <div className="shop-product-fillter mb-50 pr-30">
                                    <Title/>
                                </div>
                                <div className="loop-grid pr-30">
                                    <div className="row">
                                        <BlogGrid show={15} />
                                    </div>
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <Pagination
                                        getPaginationGroup={pages}
                                        currentPage={currentPage}
                                        pages={pages}
                                        next={next}
                                        prev={prev}
                                        handleActive={handleActive}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default PageBlogGrid
