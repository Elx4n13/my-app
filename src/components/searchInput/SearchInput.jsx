import React, { useState } from 'react';
import  './searchInput.scss'


const SearchInput = ({searchFun}) => {
    const [searchText,setSearchText]= useState('')
    
  return (
    <div className='inputCore'>
       <form onSubmit={searchFun}>
      <label htmlFor='movies'>Искать фильм по названию:
      <br />
       <input type="text"
        name='movies'
        id='movies'
        className='filmSearch'
        value={searchText}
        onChange={e=>setSearchText(e.target.value)}
        />
        <button type='submit'>Search</button>
      </label>
       </form>
    </div>
  )
}

export default SearchInput