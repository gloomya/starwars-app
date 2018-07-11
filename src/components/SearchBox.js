import React from 'react';

const SearchBox = ({seacrhfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--black bg-lighest-yellow w-30' 
            type='search' 
            placeholder='search character' 
            onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;