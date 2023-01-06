// Import from Next
import Link from "next/link"
// Import from components
import Checkboxs from "./Checkboxs"
import CheckboxsPrices from "./CheckboxsPrices"


const Sidebar = ({
                  Category, 
                  Categories_Univers_Category, 
                  Univers_Category,
                  Marques,
                  Prices,
                  Designers,
                  Styles,
                  Couleurs,
                  Motifs,
                  Materiaux,
                  handleFilter,
                  marquesFilter,
                  pricesFilter,
                  designersFilter,
                  stylesFilter,
                  couleursFilter, 
                  materiauxFilter, 
                  motifsFilter,
                  translate
                }) => {


    /*---------------------------------------------------Functions begin---------------------------------------------------*/
    const handleCheckBox = (id, filterKey) => {
        handleFilter(id, filterKey)
    }
    /*---------------------------------------------------Functions end---------------------------------------------------*/
    return (
            <div className="widget-area">

                {/* Categories of Univers of Category */}
                {
                Univers_Category&&
                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">{translate("A voir aussi dans") + " " + Univers_Category["attributes"]["LIB"]}</h5>
                    <ul>
                    {Categories_Univers_Category.map(category=>(
                        <li key={category["id"]}>
                            <Link 
                            href={`/c${category["id"]}/${category["attributes"]["slug"]}`}  
                            as={`/c/${category["id"]}/${category["attributes"]["slug"]}`}                      
                            ><a>{category["attributes"]["LIB"]}</a></Link>
                            <span className="count">{category["attributes"]["typeprods"]["data"]
                                                     .map(e=>e["attributes"]["produits"]["data"].length)
                                                     .reduce((a, b) => a + b, category["attributes"]["produits"]["data"].length)}
                            </span>
                        </li>
                    ))}
                    </ul>
                </div>
                }

                {/* Typeprods of Category */}
                {
                Category&&
                <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 className="section-title style-1 mb-30">{translate("Dans la categorie") + " : " + Category["attributes"]["LIB"]}</h5>
                    <ul>
                    {Category["attributes"]["typeprods"]["data"].map(typeprod=>(
                        <li key={typeprod["id"]}>
                            <Link 
                            href={`/p/${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
                            as={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}
                            ><a>{typeprod["attributes"]["LIB"]}</a></Link>
                            <span className="count">{typeprod["attributes"]["produits"]["data"].length}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                }

                {/* Designers */
                Designers.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Designers")}
                            </h5>
                            <Checkboxs 
                            items={Designers}
                            prop="DESIGNER"
                            handleCheckBox={handleCheckBox}
                            filterKey={designersFilter}
                            />
                        </div>
                    </div>
                </div>
                }
                
                {/* Marques */
                Marques.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Marques")}
                            </h5>
                            <Checkboxs 
                            items={Marques}
                            prop="MARQUE"
                            handleCheckBox={handleCheckBox}
                            filterKey={marquesFilter}
                            />
                        </div>
                    </div>
                </div>
                }
   
                {/* Prices */
                Prices.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group-item mb-10 mt-10">
                        <div>
                            <h5 className="section-title style-1 mb-30">
                               {translate("Prix")}
                            </h5>
                            <CheckboxsPrices
                            items={Prices}
                            prop='TARIF_PUB'
                            handleCheckBox={handleCheckBox}
                            filterKey={pricesFilter}
                            />
                        </div>
                    </div>
                   </div>
                }

                {/* Styles */
                Styles.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Styles")}
                            </h5>
                            <Checkboxs 
                            items={Styles}
                            prop="LIB"
                            handleCheckBox={handleCheckBox}
                            filterKey={stylesFilter}
                            />
                        </div>
                    </div>
                </div>
                }

                {/* Couleurs */ 
                Couleurs.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Couleurs")}
                            </h5>
                            <Checkboxs 
                            items={Couleurs}
                            prop="LIB"
                            handleCheckBox={handleCheckBox}
                            filterKey={couleursFilter}
                            />
                        </div>
                    </div>
                </div>
                }

                {/* Motifs */
                Motifs.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Motifs")}
                            </h5>
                            <Checkboxs 
                            items={Motifs}
                            prop="LIB"
                            handleCheckBox={handleCheckBox}          
                            filterKey={motifsFilter}
                            />
                        </div>
                    </div>
                </div>
                }

                { /* Materiaux */
                Materiaux.length>0&&
                <div className="sidebar-widget range mb-30">
                    <div className="list-group">
                        <div className="list-group-item mb-10 mt-10">
                            <h5 className="section-title style-1 mb-30">
                                {translate("Materiaux")}
                            </h5>
                            <Checkboxs 
                            items={Materiaux}
                            prop="LIB"
                            handleCheckBox={handleCheckBox}
                            filterKey={materiauxFilter}
                            />
                        </div>
                    </div>
                </div>
                }

            </div>
    )
}

export default Sidebar
