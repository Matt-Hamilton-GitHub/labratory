import React from 'react'
import Item from './Item'

function MainApp() {

const arr = [
    {name:'Sarah',
     age: 32},
     {name:'Kevin',
     age: 22},
     {name:'Martin',
     age: 12},
     {name:'Arthur',
     age: 23}
]

    return (
        <div>
            <Item {...arr} />
        </div>
    )
}

export default MainApp
