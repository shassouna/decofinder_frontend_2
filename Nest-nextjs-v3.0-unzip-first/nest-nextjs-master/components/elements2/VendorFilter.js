
import { useState } from "react"

const VendorFilter = () => {
    
    const [sizes, setSizeCheckbox] = useState(
        [
            { value: "NestFood" },
            { value: "stouffer" },
            { value: "starKist" },
            { value: "aldi" },
            { value: "adidas" },
            { value: "Costco" },
            { value: "Harris" },
            { value: "iSnack" },
            { value: "Burbe" }
        ]
    )

    const handleCheckBox = (event) => {
        const value = event.target.value
        const updateSizes = [...sizes]
 
        updateSizes.forEach((item) => {
            if (item.value === value) {
                if (item.checked) {
                    item.checked = false
                } else {
                    item.checked = true
                }
            }
        })

        setSizeCheckbox([...updateSizes])
    }

    return (
        <>
            <div className="custome-checkbox">
                <>
                {sizes.map((item, id) => (
                    <div key={id}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name={item.name}
                            value={item.value}
                            checked={item.checked}
                            onChange={(e) => handleCheckBox(e)}
                            id={item.value}             
                        />
                        <label className="form-check-label" htmlFor={item.value} style={{textTransform:"capitalize"}}> {item.value}</label>
                        <br/>
                    </div>
                ))}
                </>
            </div>
        </>
    )
}


export default VendorFilter
