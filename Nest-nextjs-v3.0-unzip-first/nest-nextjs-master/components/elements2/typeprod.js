import Link from "next/link"

function typeprod({typeprod}) {


    return(
        <article
            className="col-xl-3 col-lg-4 col-md-6 text-center hover-up animated"
        >
            <div className="post-thumb">
                <Link href={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}>
                    <a>
                        <img
                            className="border-radius-15"
                            src={`http://localhost:1337${typeprod["attributes"]["image"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                    </a>
                </Link>
            </div>
            <div className="entry-content-2">
                <h4 className="post-title">
                    <Link href={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}>
                        <a>{typeprod["attributes"]["LIB"]}</a>
                    </Link>
                </h4>
            </div>
        </article>
    )
}

export default typeprod