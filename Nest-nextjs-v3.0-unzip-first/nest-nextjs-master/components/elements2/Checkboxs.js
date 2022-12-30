import { useEffect, useState } from "react"

const Checkboxs = (props) => {

    const [items, setItems] = useState(props["items"])

    const handleCheckBox = (event, id) => {
        event.preventDefault()
        props["handleCheckBox"](id, props["filterKey"])
    }

    useEffect(()=>{
        items.forEach(item=>{
            if (!item["checked"]){
                item["checked"]=false
            }
            else {
                item["checked"]=true              
            }
        })
    },[])

    return (
            <div className="custome-checkbox">
                {items.map((item) => {
                    return(
                    <div key={item["item"]["id"]+item["checked"]+Math.random()} className="checkbox-container" style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name={item["item"]["attributes"][props["prop"]]}
                                value={item["item"]["attributes"][props["prop"]]}
                                checked={item["checked"]}
                                onChange={(e) => handleCheckBox(e, item["item"]["id"])}
                                id={item["item"]["id"]+item["item"]["attributes"][props["prop"]]}             
                            />
                            <label className="form-check-label" htmlFor={item["item"]["id"]+item["item"]["attributes"][props["prop"]]}  style={{textTransform:"capitalize"}}> {item["item"]["attributes"][props["prop"]]}</label>
                        </div>
                        <div className="checkbox-count">
                            <label >{item['count']}</label>
                        </div>
                    </div>)
                    })}
            </div>
    )
}


export default Checkboxs
