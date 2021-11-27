import React from 'react'
import List from '../list/List'

function Searched({list}) {
    console.log('search list======', list)
    return (
        <div>
        <h3 style={{color: '#fff'}}>Search Results</h3>
        <List list={list} />
        </div>
    )
}

export default Searched
