import Link from "next/link"
import React from "react"
import { toast } from "react-toastify"
import { addToCart } from "../../redux/action/cart"
import { addToCompare } from "../../redux/action/compareAction"
import { openQuickView } from "../../redux/action/quickViewAction"
import { addToWishlist } from "../../redux/action/wishlistAction"

const SingleProduct = ({
    product,
    addToCart,
    addToWishlist
}) => {
    const handleCart = (product) => {
        addToCart(product)
        toast("Product added to Cart !")
    }

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
                            href="/products/[slug]"
                            as={`/products/dfgegerg`}
                        >
                            <a>
                                <img
                                    className="default-img"
                                    src={"/assets/imgs/shop/product-1-1.jpg"}
                                    alt=""
                                />
                                <img
                                    className="hover-img"
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
                        {/*<span className="best">Sélection</span>*/}
                        {/*<span className="hot">Coeur</span>*/}
                        {/*<span className="sale">Achat</span>*/}
                        <span></span><span></span><span></span><span></span>
                        <span className="new">A Saisir</span>
                    </div>
                </div>
                <div className="product-content-wrap">
                    <h2>
                        <Link
                            href="/products/[slug]"
                            as={`/products/zsdvsd`}
                        >
                            <a>{"Exposant produit"}</a>
                        </Link>
                    </h2>

                    <div className="product-rate-cover">
                        <span className="font-small text-muted">
                            {"Typeprod produit"}
                        </span>
                    </div>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>Prix produit</span>
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
