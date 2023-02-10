import React from "react";
import Link from "next/link"

const Footer = ({translate}) => {
    return (
        <>
            <footer className="main">
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/"><a className="mb-15">
                                            <img
                                                src="/assets/imgs/logos/logo_df.jpg"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>

                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt=""
                                            />
                                            <strong>{translate("Adresse")} : </strong>{" "}
                                            <span>
                                                17 rue Chartran,
                                                92200 Neuilly sur Seine,
                                                France
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>{translate("Appelez-nous")} : </strong>
                                            <span>+33 (0)1 41 27 92 60 </span><br/>
                                            <span>{translate("coût d'un appel normal du lundi au vendredi de 9h30 à 18h00")}</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>{translate("Fax")} : </strong>
                                            <span>+33 (0)1 47 39 89 39</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>{translate("E-mail")} : </strong>
                                            <span>contact@decofinder.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">{translate("A propos")}</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">{translate("A propos")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("L'équipe")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Audience et Visitorat")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Revue de presse")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Sondage Opinion Way")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Contact")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Recrutement")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Mentions légales")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">{translate("EXPOSER")}</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">{translate("Utile pour l'exposant")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Témoignage exposant")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("FAQ Exposant")}</a>
                                    </li>
                                    <li>
                                        <a href="#">{translate("Conditions générales de vente")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">{translate("VENDRE")}</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">{translate("Vendre plus grâce à Decofinder")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">Popular</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Milk & Flavoured Milk</a>
                                    </li>
                                    <li>
                                        <a href="#">Butter and Margarine</a>
                                    </li>
                                    <li>
                                        <a href="#">Eggs Substitutes</a>
                                    </li>
                                    <li>
                                        <a href="#">Marmalades</a>
                                    </li>
                                    <li>
                                        <a href="#">Sour Cream and Dips</a>
                                    </li>
                                    <li>
                                        <a href="#">Tea & Kombucha</a>
                                    </li>
                                    <li>
                                        <a href="#">Cheese</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h4 className="widget-title ">Install App</h4>
                                <p className="">From App Store or Google Play</p>
                                <div className="download-app ">
                                    <a
                                        href="#"
                                        className="hover-up mb-sm-2 mb-lg-0"
                                    >
                                        <img
                                            className="active"
                                            src="/assets/imgs/theme/app-store.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="#" className="hover-up mb-sm-2">
                                        <img
                                            src="/assets/imgs/theme/google-play.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <p className="mb-20 ">Secured Payment Gateways</p>
                                <img
                                    className=""
                                    src="/assets/imgs/theme/payment-method.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy; 2021,{" "}
                                <strong className="text-brand">Nest</strong> - HTML
                                Ecommerce Template <br />
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 8888<span>24/7 Support Center</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
