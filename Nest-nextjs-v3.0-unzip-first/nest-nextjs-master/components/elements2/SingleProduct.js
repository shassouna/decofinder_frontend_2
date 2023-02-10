import Link from "next/link"

const SingleProduct = ({
    product,
    translate,
    showButtonInSingleProduct
}) => {

    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        {product["attributes"]["images"]["data"]&&
                        <Link href={`/z${product["id"]}/${product["attributes"]["slug"]}`}>
                            <a>
                                    <img
                                        className="default-img"
                                        src={`http://localhost:1337${product["attributes"]["images"]["data"][0]["attributes"]["url"]}`}
                                        alt=""
                                    />
                                </a>
                        </Link>
                        }
                    </div>

                    <div className="product-badges product-badges-position product-badges-mrg mb-20">
                        <span></span><span></span><span></span><span></span>
                        {product["attributes"]["SELECTION"]==1&&<span className="best">Sélection</span>}
                        {product["attributes"]["COUP_DE_COEUR"]==1&&<span className="hot">Coeur</span>}
                        {product["attributes"]["ACHAT_EN_LIGNE"]==1&&<span className="sale">Achat</span>}
                        {product["attributes"]["A_SAISIR"]==1&&<span className="new">A Saisir</span>}
                    </div>
                </div>
                <div className="product-content-wrap">
                    {product["attributes"]["exposant"]["data"]&&
                    <h2>
                        <Link href={`/pp${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`}>
                            <a>{product["attributes"]["exposant"]["data"]["attributes"]["NOM"]}</a>
                        </Link>
                    </h2>                    
                    }
                    {product["attributes"]["typeprod"]["data"]&&
                    <div className="product-rate-cover">
                        <Link href={`/p${product["attributes"]["typeprod"]["data"]["id"]}/${product["attributes"]["typeprod"]["data"]["attributes"]["slug"]}`}>
                            <span className="font-small">{product["attributes"]["typeprod"]["data"]["attributes"]["LIB"]}</span>
                        </Link>
                        <p>{product["attributes"]["TITRE"]}</p>
                    </div>
                    }
                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>{product["attributes"]["TARIF_PUB"]?product["attributes"]["TARIF_PUB"]+" €": translate("Prix sur demande")}</span>
                        </div>
                    </div>
                </div>
            </div>
            {showButtonInSingleProduct ==true&&
            <>
                {
                product["attributes"]["SELECTION"]==1&&
                <a className="btn w-100 hover-up">
                    Toutes les sélections du Jury
                </a>
                }
                {
                product["attributes"]["COUP_DE_COEUR"]==1&&
                <a className="btn w-100 hover-up">
                    Tous les coups de coeur
                </a>
                }
                {
                product["attributes"]["ACHAT_EN_LIGNE"]==1&&
                <a className="btn w-100 hover-up">
                    Tous les achats en ligne 
                </a>
                }
                {
                product["attributes"]["A_SAISIR"]==1&&
                <a className="btn w-100 hover-up">
                    Toutes les promotions
                </a>
                }
            </>
            }
        </>
    )
}

export default SingleProduct
