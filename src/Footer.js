import React from 'react'
import './App.css'

const Footer = ({items, handleChange, handleDelete}) => {
  return (
    <div className='footer'>
      {items.length} list {items.length === 1 ? 'item is' : 'items are'} available
    </div>
  )
}

export default Footer