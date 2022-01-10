import React from 'react'

function Item(props) {
    console.log(props);
    return (
        <div>
            {props.map((person,idx)=>{
                const [name,age] = person;
                
                return(
                    <div key={idx}>
                        <h1>{name}</h1>
                        <p>{age}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Item
