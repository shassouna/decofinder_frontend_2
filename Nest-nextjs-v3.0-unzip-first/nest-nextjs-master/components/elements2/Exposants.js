import Link from "next/link"

const Exposants = ({exposants}) => {

    return (
        <>
            <ul>
            {exposants.slice(0,5).map(exposant=>(
                <li key={exposant["id"]}>
                    <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                    <a>
                        <img
                            src={`http://localhost:1337${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                        {exposant["attributes"]["NOM"]}
                    </a>
                    </Link>
                </li>
            ))}
            </ul>
            <ul>
            {exposants.slice(5,10).map(exposant=>(
                <li key={exposant["id"]}>
                    <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                    <a>
                        <img
                            src={`http://localhost:1337${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                        {exposant["attributes"]["NOM"]}
                    </a>
                    </Link>
                </li>
            ))}
            </ul>
            <ul>
            {exposants.slice(10,15).map(exposant=>(
                <li key={exposant["id"]}>
                    <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                    <a>
                        <img
                            src={`http://localhost:1337${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                        {exposant["attributes"]["NOM"]}
                    </a>
                    </Link>
                </li>
            ))}
            </ul>
            <ul>
            {exposants.slice(15,20).map(exposant=>(
                <li key={exposant["id"]}>
                    <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                    <a>
                        <img
                            src={`http://localhost:1337${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                        {exposant["attributes"]["NOM"]}
                    </a>
                    </Link>
                </li>
            ))}
            </ul>
            <ul>
            {exposants.slice(20,25).map(exposant=>(
                <li key={exposant["id"]}>
                    <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                    <a>
                        <img
                            src={`http://localhost:1337${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                            alt=""
                        />
                        {exposant["attributes"]["NOM"]}
                    </a>
                    </Link>
                </li>
            ))}
            </ul>
        </>
    )
}

export default Exposants
