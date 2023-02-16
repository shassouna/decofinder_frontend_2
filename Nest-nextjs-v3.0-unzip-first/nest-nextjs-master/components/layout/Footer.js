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
                                <h4 className="widget-title ">{translate("Acheter")}</h4>
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
                                <div className="download-app ">
                                <a className="btn w-100 mb-20 hover-up">
                                    {translate("ENREGISTREZ VOTRE ENTREPRISE")}
                                </a>
                                <a className="btn w-100 mb-20 hover-up">
                                    {translate("RÉFÉRENCEZ VOS PRODUITS  | ACCÈS DECOPRO")}
                                </a>
                                <a className="btn w-100 hover-up">
                                    {translate("Tous les articles du mag déco")}
                                </a>
                                </div>
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
                                Copyright &copy; 2000-2023,{" "}
                                <strong className="text-brand">Nest</strong> - HTML
                                Distrimart SAS - <br />
                                Déclaration CNIL n1064213
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <span>
                                    +33 1 41 27 92 60
                                </span>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <span>
                                    fax : +33 1 47 39 89 39
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>{translate("Suivez-nous")}</h6>
                                <a href="https://www.facebook.com/decofinder">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://twitter.com/decofinder">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://www.instagram.com/decofinder/">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://www.pinterest.fr/decofinder/">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="https://www.youtube.com/@decofinder">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
