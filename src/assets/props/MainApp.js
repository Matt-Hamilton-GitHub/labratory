import React from 'react'
import Items from './Items'

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
        <div data-aos="fade-up">
            {/* <Items title='person' arr={arr} /> */}
        </div>
    )
}

export default MainApp
