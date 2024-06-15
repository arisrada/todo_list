import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './App.css'

const AddItems = ({newItem,setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItems">Add Items</label>
        <input 
            autoFocus
            required
            type="text"
            placeholder='Add Items'
            id='addItems' 
            value={newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Items'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItems