// Import from Next
import Link from "next/link"

const Revendeur = ({item, translate}) => {

    return (
        <div className="col-lg-6 col-md-6 col-12 col-sm-6" style={{width:"49%"}}>
            <div className="vendor-wrap mb-10  style-2">
                <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                        <Link href={`/ss${item["id"]}/${item["attributes"]["slug"]}`} as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}><a>
                            <img className="default-img" src={`/assets/imgs/vendor/vendor-1.png`} alt="" />
                        </a></Link>
                    </div>

                    <div className="mt-25">
                        <Link href={`/ss${item["id"]}/${item["attributes"]["slug"]}`} as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}><a><span className="font-small total-product">{item["attributes"]["NOM"]}</span></a></Link>
                    </div>
                </div>
                <div className="vendor-content-wrap">
                    <div className="mb-30">
                        <h4 className="mb-5"><Link href={`/ss${item["id"]}/${item["attributes"]["slug"]}`} as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}><a>{item["attributes"]["NOM"]}</a></Link></h4>
                        <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                            <ul className="contact-infor text-muted">
                                <li><img src="/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>{translate("Adresse")} : </strong> <span>{item["attributes"]["ADRESSE"]}</span></li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong></strong><span>{item["attributes"]["VILLE"]}, {item["attributes"]["CP"]}</span></li>
                                <li className="mb-25"><img src="/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>{translate("Numéro de téléphone")} : </strong><span>{item["attributes"]["TELEPHONE"]}</span></li>
                                <li><a href={item["attributes"]["SRV_INTERNET"]} target="_blank" className="btn btn-xs">SiteWeb<i className="fi-rs-arrow-small-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Revendeur