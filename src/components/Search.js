import React from 'react'

function Search({setSearchItem}) {

    
    const handleSearch = (e) =>{
        setSearchItem ( e.target.value )
    }


    return (
        <div>
            <div>
            <input 
            type='text' 
            placeholder="Search..."
            id='search-bar'
            
            onChange={handleSearch}
            /> 
        </div>
        </div>
    )
}

export default Search;

