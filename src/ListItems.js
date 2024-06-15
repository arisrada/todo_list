import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import './App.css'

const ListItems = ({item, handleChange, handleDelete}) => {
  return (
    <li className='listitems' key={item.id}>
            <input 
            type="checkbox"
            onChange={() => handleChange(item.id)}
            checked = {item.checked}
            />
            <label 
              onDoubleClick={() => handleDelete(item.id)}
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
              >
                {item.item}
            </label>
            <FaTrashAlt 
            role='button'
            tabIndex='0'
            onClick={() => handleDelete(item.id)}
            aria-label={`Delete ${item.item}`}
            />
          </li>
  )
}

export default ListItems