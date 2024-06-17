import './App.css'
import ListItems from "./ListItems";

const Content = ({items, handleChange, handleDelete}) => {
  return (
    <>
      {(items.length) ? (
        <ul style={{listStyleType: 'none'}}>
        {items.map((item) => (
          <ListItems 
          item = {item}
          handleChange = {handleChange}
          handleDelete = {handleDelete}
          />
        ))}
      </ul>
      ) : (
        <p style={{color: '#333333', fontSize: '50px'}}>Your list is empty</p>
      )}
      
    </>
  )
}

export default Content