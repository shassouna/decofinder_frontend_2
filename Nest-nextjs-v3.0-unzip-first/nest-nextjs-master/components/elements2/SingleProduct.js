import Link from "next/link"
import React from "react"
import { connect } from "react-redux"
import { toast } from "react-toastify"
import { addToCart } from "../../redux/action/cart"
import { addToCompare } from "../../redux/action/compareAction"
import { openQuickView } from "../../redux/action/quickViewAction"
import { addToWishlist } from "../../redux/action/wishlistAction"

const SingleProduct = ({
    product,
    addToWishlist
}) => {

    const handleWishlist = (product) => {
        addToWishlist(product)
        toast("Added to Wishlist !")
    }
    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link
                            href={`/z${product["id"]}/${product["attributes"]["slug"]}`}
                        >
                            <a>
                                <img
                                    className="default-img"
                                    src={"/assets/imgs/shop/product-1-1.jpg"}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a
                            aria-label="Add To Wishlist"
                            className="action-btn hover-up"
                            onClick={(e) => handleWishlist(product)}
                        >
                            <i className="fi-rs-heart"></i>
                        </a>
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
                    <h2>
                        <Link
                            href={`/pp${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`}
           
                        >
                            <a>{product["attributes"]["exposant"]["data"]["attributes"]["NOM"]}</a>
                        </Link>
                    </h2>
                    {product["attributes"]["typeprod"]&&product["attributes"]["typeprod"]["data"]&&
                    <div className="product-rate-cover">
                        <Link
                            href={`/p${product["attributes"]["typeprod"]["data"]["id"]}/${product["attributes"]["typeprod"]["data"]["attributes"]["slug"]}`}
                        >
                            <span className="font-small">
                                {product["attributes"]["typeprod"]["data"]["attributes"]["LIB"]}
                            </span>
                        </Link>
                    </div>
                    }

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>{product["attributes"]["TARIF_PUB"]?product["attributes"]["TARIF_PUB"]+" €":"Prix sur demande"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}

export default connect(null, mapDispatchToProps)(SingleProduct)
