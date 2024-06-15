import React from 'react'
import './App.css'

const SearchItems = ({search, setSearch}) => {
  return (
    <form className='searchItems' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchItems">Search Items</label>
        <input 
            autoFocus
            type="text"
            placeholder='Search Items'
            role='searchbox'
            id='searchItems'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
        />
    </form>
  )
}

export default SearchItems