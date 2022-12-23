import React from 'react'

const Title = ({elements}) => {

    return (
        <>
            <div className="totall-product">
                <h2>
                {
                elements.map((element, index)=>
                    elements.indexOf(element)==elements.length-1?
                    <div key={index}>{element} :</div>:
                    <div key={index}>{element} -</div>
                )}
                </h2>
            </div>
        </>
    )
}

export default Title