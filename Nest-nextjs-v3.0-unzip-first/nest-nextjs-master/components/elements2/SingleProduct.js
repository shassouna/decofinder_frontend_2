import Link from "next/link"
import { useState, useEffect } from "react"

const SingleProduct = ({
    product,
    translate,
    showButtonInSingleProduct
}) => {

    const [heart, setHeart] = useState("\u2661")

    useEffect(()=>{
        const wishlist = JSON.parse(localStorage.getItem('wishlist'))

        if(wishlist!=null && wishlist.find(element=>element["id"] == product["id"])){
            setHeart("\u2764")
        }
    },[])

    const handleAddToWishList = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist'))

        if(wishlist==null){wishlist=[]}

        if(heart == "\u2661"){
            setHeart("\u2764")
            wishlist.push(product)
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }
        
        else{
            setHeart("\u2661")
            let index = wishlist.indexOf(wishlist.find(element=>element["id"] == product["id"])) 
            wishlist.splice(index, 1)
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }
    }

    return (
        <>
            <div className="product-cart-wrap mb-30" style={{minHeight:"480px"}}>
                <div className="product-img-action-wrap" style={{minHeight:"320px", display:"flex", justifyContent:"center", alignItems:"center"}}>
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
                        {product["attributes"]["SELECTION"]==1&&<span className="best">Sélection</span>}
                        {product["attributes"]["COUP_DE_COEUR"]==1&&<span className="hot">Coeur</span>}
                        {product["attributes"]["ACHAT_EN_LIGNE"]==1&&<span className="sale">Achat</span>}
                        {product["attributes"]["A_SAISIR"]==1&&<span className="new">A Saisir</span>}
                    </div>
                </div>
                <div className="product-content-wrap">
                    {product["attributes"]["exposant"]["data"]?
                    <h2>
                        <Link href={`/pp${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`}>
                            <a>{product["attributes"]["exposant"]["data"]["attributes"]["NOM"]}</a>
                        </Link>
                    </h2>  
                    :
                    <h2>
                        <a>{translate("Pas d'exposant")}</a>
                    </h2>                                   
                    }
                    
                    {product["attributes"]["typeprod"]["data"]?
                    <div className="product-rate-cover">
                        <Link href={`/p${product["attributes"]["typeprod"]["data"]["id"]}/${product["attributes"]["typeprod"]["data"]["attributes"]["slug"]}`}>
                            <span className="font-small">{product["attributes"]["typeprod"]["data"]["attributes"]["LIB"]}</span>
                        </Link>
                        {product["attributes"]["TITRE"] || product["attributes"]["TITRE"]==null?
                        <p>{product["attributes"]["TITRE"]}</p>
                        :
                        <br/>
                        }
                    </div>
                    :
                    <div className="product-rate-cover">
                        <span className="font-small">{translate("Pas de type produit")}</span>
                        {product["attributes"]["TITRE"] || product["attributes"]["TITRE"]==null?
                        <p>{product["attributes"]["TITRE"]}</p>
                        :
                        <br/>
                        }
                    </div>
                    }
                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>{product["attributes"]["TARIF_PUB"]?product["attributes"]["TARIF_PUB"]+" €": translate("Prix sur demande")}</span>
                        </div>
                        <div className="header-action-icon-2">
                            <a aria-label="Add To Wishlist" className="action-btn hover-up">
                                <div style={{fontSize:heart=="\u2661"?"48px":"32px"}}
                                onClick={handleAddToWishList}>
                                    {heart}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {showButtonInSingleProduct ==true&&
            <>
            {
            product["attributes"]["SELECTION"]==1?
            <Link href="/jury">
                <a className="btn w-100 hover-up">
                    Toutes les sélections du Jury
                </a>              
            </Link>
            :product["attributes"]["COUP_DE_COEUR"]==1?
            <Link href="/jury">
                <a className="btn w-100 hover-up">
                    Tous les coups de coeur
                </a>               
            </Link>
            :product["attributes"]["ACHAT_EN_LIGNE"]==1?
            <Link href="/jury">
                <a className="btn w-100 hover-up">
                    Tous les achats en ligne 
                </a>                
            </Link>
            :product["attributes"]["A_SAISIR"]==1?
            <Link href="/jury">
                <a className="btn w-100 hover-up">
                    Toutes les promotions
                </a>
            </Link>
            :null           
            }
            </>
            }
        </>
    )
}

export default SingleProduct
