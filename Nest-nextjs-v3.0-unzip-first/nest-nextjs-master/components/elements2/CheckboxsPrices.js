import { useEffect, useState } from "react"

const CheckboxsPrices = (props) => {

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
            items&&
            <div className="custome-checkbox">
                {items.map((item, index) => (                
                    <div className="checkbox-container" style={{display:"flex", justifyContent:"space-between"}} key={item["id"]}>     
                        <div className="checkbox-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name={item["item"].toString()}
                                value={item["item"].toString()}
                                checked={item["checked"]}
                                onChange={(e) => handleCheckBox(e, item["id"])}
                                id={item["id"].toString()}   
                            />
                            {
                            index == 0 ?
                            <label className="form-check-label" htmlFor={item['id']} style={{textTransform:"capitalize"}}> {item['item'][1]+' € <'}</label>
                            : index > 0 && index < Object.keys(items).length-1?
                            <label className="form-check-label" htmlFor={item['id']} style={{textTransform:"capitalize"}}> {item['item'][0]+' €'+' - '+item['item'][1]+' €'}</label>
                            : 
                            <label className="form-check-label" htmlFor={item['id']} style={{textTransform:"capitalize"}}> {'> '+item['item'][0]+' €'}</label>
                            }
                        </div>
                        <div className="checkbox-count">
                            <label>{item['count']}</label>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default CheckboxsPrices
