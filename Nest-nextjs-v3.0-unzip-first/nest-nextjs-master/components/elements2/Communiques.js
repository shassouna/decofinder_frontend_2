import Link from "next/link"

const Communiques = ({ items }) => {

    return (
            items.map((item, i) => (
                <article className="wow fadeIn animated hover-up mb-30" key={item["id"]}>
                    <div
                        className="post-thumb"
                        style={{
                            backgroundImage: `url(http://localhost:1337${item["attributes"]["image"]["data"]["attributes"]["url"]})`,
                        }}
                    >
                    </div>
                    <div className="entry-content-2">
                        <p className="post-exerpt mb-30">
                            {item["attributes"]["Communique"]}
                        </p>
                        <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                            <div>
                                <span className="post-on">
                                    {" "} <i className="fi-rs-clock"></i>
                                </span>
                                <span className="post-on">
                                    {item["attributes"]["DATE_INS"].split("T")[0]}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            ))
    )
}

export default Communiques 
