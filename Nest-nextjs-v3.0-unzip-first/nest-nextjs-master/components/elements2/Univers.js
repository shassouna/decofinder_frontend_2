import Link from "next/link"

function univers({univers}) {


    return(
        <article
            className="col-xl-3 col-lg-4 col-md-6 text-center hover-up animated"
        >
            <div className="post-thumb">
                <Link 
                    href={`/u/${univers["id"]}/${univers["attributes"]["slug"]}`}
                    as={`/u${univers["id"]}/${univers["attributes"]["slug"]}`}
                >
                    <a>
                        <img
                            className="border-radius-15"
                            src={`http://localhost:1337${univers["attributes"]["image"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                    </a>
                </Link>
            </div>
            <div className="entry-content-2">
                <h4 className="post-title mb-10">
                    <Link 
                        href={`/u/${univers["id"]}/${univers["attributes"]["slug"]}`}
                        as={`/u${univers["id"]}/${univers["attributes"]["slug"]}`}
                    >
                        <a>{univers["attributes"]["LIB"]}</a>
                    </Link>
                </h4>
            </div>
        </article>
    )
}

export default univers