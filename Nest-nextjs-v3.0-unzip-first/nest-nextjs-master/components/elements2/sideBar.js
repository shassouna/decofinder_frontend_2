import Link from "next/link"
import React from "react"
import VendorFilter from "./VendorFilter"

const Sidebar = ({Category, Categories_Univers_Category, Univers_Category}) => {

    return (
        <>
            <div className="widget-area">

                {/* Categories of Univers of Category */}
                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">A voir aussi dans {Univers_Category["attributes"]["LIB"]}</h5>
                    <ul>
                    {Categories_Univers_Category.map(category=>(
                        <li key={category["id"]}>
                            <Link href={`/c${category["id"]}/${category["attributes"]["slug"]}`}><a>{category["attributes"]["LIB"]}</a></Link>
                            <span className="count">{category["attributes"]["typeprods"]["data"]
                                                     .map(e=>e["attributes"]["produits"]["data"].length)
                                                     .reduce((a, b) => a + b, 0)}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Typeprods of Category */}
                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">Dans la categorie : {Category["attributes"]["LIB"]}</h5>
                    <ul>
                    {Category["attributes"]["typeprods"]["data"].map(typeprod=>(
                        <li key={typeprod["id"]}>
                            <Link href={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}><a>{typeprod["attributes"]["LIB"]}</a></Link>
                            <span className="count">{typeprod["attributes"]["produits"]["data"].length}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Marques */}
                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                Marques
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>

                <div className="sidebar-widget price_range range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                New products
                            </h5>
                            <VendorFilter />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Sidebar
