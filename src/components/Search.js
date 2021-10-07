import React , {useState} from 'react'

function Search() {

    const [searchData, setSearchData] = useState([])
    const handleSearch = (data) =>{
        setSearchData ( data.target.value )
    }
    

    return (
        <div>
            <div>
            <input 
            type='text' 
            placeholder="Search..."
            id='search-bar'
            value={searchData}
            onChange={handleSearch}
            /> 
        </div>
        </div>
    )
}

export default Search

