import React from 'react'
import Item from './Item';

function Items({arr,title}) {
    console.log(arr);
    return (<div>
            {arr.map((person,idx)=>{
                const {name,age} = person;
                return(
                   <Item key={idx} name={name} age={age}/>
                )
            })}
        </div>
    )
}

export default Items
