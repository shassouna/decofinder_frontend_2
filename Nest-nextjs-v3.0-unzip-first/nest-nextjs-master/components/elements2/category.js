import Link from "next/link"

function category({category}) {


    return(
        <article
            className="col-xl-3 col-lg-4 col-md-6 text-center hover-up animated"
        >
            <div className="post-thumb">
                <Link href={`/c${category["id"]}/${category["attributes"]["slug"]}`}>
                    <a>
                        <img
                            className="border-radius-15"
                            src={`http://localhost:1337${category["attributes"]["image"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                    </a>
                </Link>
            </div>
            <div className="entry-content-2">
                <h4 className="post-title mb-10">
                    <Link href={`/c${category["id"]}/${category["attributes"]["slug"]}`}>
                        <a>{category["attributes"]["LIB"]}</a>
                    </Link>
                </h4>
                {
                category["attributes"]["typeprods"]&&
                <>
                    <div className="mb-20">
                        { 
                        category["attributes"]["typeprods"]["data"]
                        .map((typeprod,index)=>(
                            <Link href={`/p${typeprod["id"]}/${typeprod["attributes"]["slug"]}`}>
                                <div key={typeprod["id"]}>
                                {index+1 + " - " + typeprod["attributes"]["LIB"]}
                                </div>
                            </Link>
                        ))
                        }
                    </div>
                    <a
                        aria-label="Add To Cart"
                        className="btn"
                    >
                        Tous les produits
                    </a>
                </>
                }
            </div>
        </article>
    )
}

export default category