// Import from Components
import ExposantsTag from "../elements2/Exposants"
import Search from "../elements2/Search"
// Import from Next
import { useRouter } from "next/router"
import Link from "next/link"
// Import from React
import React, { useEffect, useState } from "react"
import Wishlist from "../../pages/shop-wishlist"

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
    translate,
    superuniverss,
    exposants
}) => {

    const router = useRouter()

    const [isToggled, setToggled] = useState(false)
    const [scroll, setScroll] = useState(0)

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })  

    if (typeof window !== 'undefined') {
        useEffect(()=>{
            const wishlistLocal = JSON.parse(localStorage.getItem("wishlist"))
            if(wishlistLocal  != null){
                setWishlist(wishlistLocal)
            }
        },[localStorage.getItem("wishlist")]) 
    }

    const handleToggle = () => setToggled(!isToggled)

    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/logos/logo_df.jpg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="header-info header-info-right mr-50 mt-10">
                                    <ul>
                                        <li>
                                            {
                                            router["locale"]=="fr"?
                                            <Link href={router["asPath"]}>
                                                <a className="language-dropdown-active">                                             
                                                    <img
                                                        src="/assets/imgs/theme/flag-fr.png"
                                                        alt=""
                                                    />
                                                    Français
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            :router["locale"]=="en"?
                                            <Link href={router["asPath"]}>
                                                <a className="language-dropdown-active">                                                                                  
                                                    <img
                                                        src="/assets/imgs/theme/flag-gbr.png"
                                                        alt=""
                                                    />                 
                                                    English
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            :router["locale"]=="es"?
                                            <Link href={router["asPath"]}>
                                                <a className="language-dropdown-active">                                                               
                                                    <img
                                                        src="/assets/imgs/theme/flag-es.png"
                                                        alt=""
                                                    />        
                                                    Espagnol
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>  
                                            :router["locale"]=="de"?    
                                            <Link href={router["asPath"]}>
                                                <a className="language-dropdown-active">                                                                  
                                                    <img
                                                        src="/assets/imgs/theme/flag-de.png"
                                                        alt=""
                                                    />
                                                    Espagnol
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link> 
                                            :router["locale"]=="it"? 
                                            <Link href={router["asPath"]} locale="it">
                                                <a className="language-dropdown-active">                                                                     
                                                    <img
                                                        src="/assets/imgs/theme/flag-it.png"
                                                        alt=""
                                                    />
                                                    Italiano
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>  
                                            :null                                 
                                            }
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href={router["asPath"]} locale="fr">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-fr.png"
                                                                alt=""
                                                            />
                                                            Français
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={router["asPath"]} locale="en">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-gbr.png"
                                                                alt=""
                                                            />
                                                            English
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={router["asPath"]} locale="de">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-de.png"
                                                                alt=""
                                                            />
                                                            Deutsch
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={router["asPath"]} locale="it">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-it.png"
                                                                alt=""
                                                            />
                                                            Italiano
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={router["asPath"]} locale="es">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-es.png"
                                                                alt=""
                                                            />
                                                            Espagnol
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="search-style-2">
                                    <Search translate={translate}/>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-compare">
                                                <a>
                                                    <span className="lable">
                                                        {translate("Inspirations")}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="https://mag.decofinder.com/">
                                                <a>
                                                    <span className="lable">
                                                        {translate("LE MAG")}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="/new">
                                                <a>
                                                    <span className="lable">
                                                        {translate("Nouveautés")}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a style={{fontSize:wishlist.length>0?"40px":"40px"}}>
                                                {wishlist.length>0 && "\u2764"}
                                                {wishlist.length==0 && "\u2661"}
                                                </a>
                                            </Link>
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <span>
                                                        {wishlist.length}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
 
                                        <div className="header-action-icon-2">
                                            <Link href="/page-account">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Nest"
                                                        src="/assets/imgs/theme/icons/icon-user.svg"
                                                    />
                                                </a>
                                            </Link>
                                            <Link href="/page-account">
                                                <a className="ml-5">
                                                    <span className="lable ml-0">
                                                        {translate("Compte")}
                                                    </span>
                                                </a>
                                            </Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link href="/page-account">
                                                             <a>
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                My Account
                                                            </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-location-alt mr-10"></i>
                                                            Order Tracking
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-label mr-10"></i>
                                                            My Voucher
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-wishlist"><a>
                                                            <i className="fi fi-rs-heart mr-10"></i>
                                                            My Wishlist
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                            Setting
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login"><a>
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            Sign out
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">

                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categories-button-active"
                                        onClick={handleToggle}
                                    >
                                        {translate("Exposants")}
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                                                : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                                        }
                                    >
                                        <div className="d-flex categori-dropdown-inner">
                                            <ExposantsTag exposants={exposants}/>
                                        </div>
                                        <div
                                            className="more_slide_open"
                                            style={{ display: "none" }}
                                        >
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-1.svg"
                                                                alt=""
                                                            />
                                                            Milks and Dairies
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-2.svg"
                                                                alt=""
                                                            />
                                                            Clothing & beauty
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-3.svg"
                                                                alt=""
                                                            />
                                                            Wines & Drinks
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products"><a>
                                                            {" "}
                                                            <img
                                                                src="/assets/imgs/theme/icons/icon-4.svg"
                                                                alt=""
                                                            />
                                                            Fresh Seafood
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span>{" "}
                                            <span className="heading-sm-1">
                                                {translate("Afficher plus")} ...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------- maga menu pc begin ------------------------- */}
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                        {superuniverss.map(superunivers=>(
                                            <li className="position-static" key={superunivers["id"]}>
                                                <Link href={`/su${superunivers["id"]}/${superunivers["slug"]}`}
                                                as={`/su/${superunivers["id"]}/${superunivers["slug"]}`}>
                                                    <a>
                                                        {superunivers["attributes"]["LIB"]}
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                {superunivers["attributes"]["univers"]["data"].map(univers=>(
                                                <li className="sub-mega-menu sub-mega-menu-width-22" key={univers["id"]}>
                                                    <a
                                                        className="menu-title"
                                                        href="#"
                                                    >
                                                        {univers["attributes"]["LIB"]} 
                                                    </a>
                                                    <ul>
                                                    {univers["attributes"]["categories"]["data"].map(category=>(
                                                        <li key={category["id"]}>
                                                            <Link href={`/c${category["id"]}/${category["attributes"]["slug"]}`}
                                                            as={`/c/${category["id"]}/${category["attributes"]["slug"]}`}>
                                                                <a>
                                                                {category["attributes"]["LIB"]}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </li>
                                                ))}
                                                </ul>
                                            </li>
                                        ))}             
                                        </ul>
                                    </nav>
                                </div>
                                {/* ------------------------- maga menu pc end ------------------------- */}
                            </div>


                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCompareItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalWishlistItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCartItems}
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>
                                                                    Plain
                                                                    Striola
                                                                    Shirts
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href={router["asPath"]}>
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>
                                                                    Macbook Pro
                                                                    2022
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href={router["asPath"]}>
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header
