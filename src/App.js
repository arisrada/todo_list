import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'
import AddItems from './AddItems';
import SearchItems from './SearchItems';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log("submitted")
    addItem(newItem)
    setNewItem('')
  }

  const handleChange = (id) => {
    const listItems = items.map(
      (item) => item.id === id ? 
      {...item, checked: !item.checked}: item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter(
      (item) => item.id !== id)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  return (
    <div className='full'>
      <Header title="Srada's To Do List" />
      <AddItems 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItems 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer 
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App