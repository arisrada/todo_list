import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
import './App.css'

const AddItems = ({newItem,setNewItem, handleSubmit}) => {

  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItems">Add Items</label>
        <input 
            autoFocus
            required
            ref={inputRef}
            type="text"
            placeholder='Add Items'
            id='addItems' 
            value={newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Items'
            onClick={() => inputRef.current.focus}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItems