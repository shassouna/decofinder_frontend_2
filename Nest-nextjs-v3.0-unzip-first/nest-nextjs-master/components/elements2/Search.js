import { useRouter } from "next/router"
import React, { useState } from "react"

const Search = ({translate}) => {
    
    const [searchTerm, setSearchTerm] = useState("")
    const router = useRouter()

    const handleSearch = () => {

        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        })
        setSearchTerm("")
    }

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSearch()
        }
    }
    return (
        <>
            <form>
                <select className="select-active">
                    <option>{translate("Tout")}</option>
                    <option>{translate("Super univers")}</option>
                    <option>{translate("Univers")}</option>
                    <option>{translate("Categorie")}</option>
                    <option>{translate("Type produit")}</option>
                    <option>{translate("Produit")}</option>
                    <option>{translate("Exposant")}</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder={translate("Recherchez")}
                />
            </form>
        </>
    )
}

export default Search
