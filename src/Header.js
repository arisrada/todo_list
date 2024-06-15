import React from 'react'
import './App.css'

const Header = ({title}) => {
  return (
    <h1 className='header'>{title}</h1>
  )
}

Header.defaultProps = {
  title : "To Do List"
}
export default Header