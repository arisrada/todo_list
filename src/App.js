import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'
import AddItems from './AddItems';
import SearchItems from './SearchItems';
import apiRequest from './apiRequest';

function App() {
  
  const API_URL = "http://localhost:3500/items";
  
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setItems(listItems)
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.stack)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 200);
  }, [])

  const addItem = async (item) => {
    const id = items.length ? parseInt(items[items.length - 1].id) +1 : 1;
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem) 
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log("submitted")
    addItem(newItem)
    setNewItem('')
  }

  const handleChange = async (id) => {
    const listItems = items.map(
      (item) => item.id === id ? 
      {...item, checked: !item.checked}: item)
      setItems(listItems)

      const myItem = listItems.filter((item) => item.id === id)
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked}) 
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOptions)
      if(result) setFetchError(result)
  }
  const handleDelete = async (id) => {
    const listItems = items.filter(
      (item) => item.id !== id)
      setItems(listItems)

      const deleteOptions = {
        method: 'DELETE'
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, deleteOptions)
      if(result) setFetchError(result)
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
      <main className='body'>
        {isLoading && <p>Loading Items !!....</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {
          !isLoading && !fetchError && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
        }
      
      </main>

      <Footer 
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App