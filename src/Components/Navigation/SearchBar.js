import React, {useState} from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='SearchBarContainer'>
            <input 
                type='text'
                className='SearchBarInput'
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Search...'
            />
        </div>
    )
}

export default SearchBar;