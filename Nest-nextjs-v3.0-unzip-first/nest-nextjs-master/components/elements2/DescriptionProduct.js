import React, { useState } from "react"
import Revendeur from "./Revendeur"

const ProductTab = ({Product, Couleur, Style, Motif, Materiau, Exposant, Revendeurs_produit, translate}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} id="Additional-info-tab" data-bs-toggle="tab" onClick={() => handleOnClick(1)}>
                            {translate("Détails")}
                        </a>
                    </li>
                    {Revendeurs_produit.length>0&&
                    <li className="nav-item">
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(2)}>
                        {translate("Revendeurs")}
                        </a>
                    </li>
                    }
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="Description">
                        <div className="">
                            <p>{Product["attributes"]["DESC"]}</p>
                            <ul className="product-more-infor mt-30">
                                {Product["attributes"]["DESIGNER"]&&
                                <li>
                                    <span>{translate("Designer")}</span>
                                    {Product["attributes"]["DESIGNER"]}
                                </li>
                                }
                                {Product["attributes"]["MARQUE"]&&
                                <li>
                                    <span>{translate("Marque")}</span>
                                    {Product["attributes"]["MARQUE"]}
                                </li>
                                }
                                {Couleur&&Couleur["attributes"]["LIB"]&&
                                <li>
                                    <span>{translate("Couleur")}</span>
                                    {Couleur["attributes"]["LIB"]}
                                </li>
                                }
                                {Style&&Style["attributes"]["LIB"]&&
                                <li>
                                    <span>{translate("Style")}</span>
                                    {Style["attributes"]["LIB"]}
                                </li>
                                }
                                {Motif&&Motif["attributes"]["LIB"]&&
                                <li>
                                    <span>{translate("Motif")}</span>
                                    {Motif["attributes"]["LIB"]}
                                </li>
                                }
                                {Materiau&&Materiau["attributes"]["LIB"]&& 
                                <li>
                                    <span>{translate("Materiau")}</span>
                                    {Materiau["attributes"]["LIB"]}
                                </li>  
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Reviews" style={{display : activeIndex === 2 && "flex", justifyContent : activeIndex === 2 && "space-between"}}>
                    {Revendeurs_produit.map((revendeur, index)=>(
                        <Revendeur item={revendeur} translate={translate} key={Exposant["id"]+index}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTab
