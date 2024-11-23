import React, {useContext, useState} from 'react'
import Header from '../Header'
import { Context } from '../../App'


import "./index.css"
import { Link } from 'react-router-dom'

const ViewTask = () => {
    const[valuesList, setValuesList] = useContext(Context)
   
    const [searchText, setSearch] = useState('')

const deleteTask = (id) =>{
    const newDatas = valuesList.filter((each) =>{
     return id !== each.id
   })

   setValuesList(newDatas)
}

  const searchinput = (e) =>{
       setSearch(e.target.value)
  }

  const getSearchData = () =>{
       
    const searchedData = valuesList.filter((each) =>{
       
      return each.status === searchText
    }

   
  
  )
  setValuesList(searchedData)
    
  }

  return (
    <>
      <Header />
      <div className='search-container'>
        <input type='search' className='search-field' placeholder='search by status' value={searchText} onChange={searchinput} />
        <button type='button' className='search-btn' onClick={getSearchData} >Search</button>
      </div>
     
     {
      valuesList.legth !== 0 ? <ul className="blog-items-listss">
            
      {valuesList.map((each) => (
              <li key = {each.id} id = "hovermes" className="blog-items">
               <div className='card-data'>
                <h1 className='title'>Title : {each.title}</h1>
                <p className='desc'>Description : {each.description}</p>
                <p className='date'>Due Date : {each.duedate}</p>
                <p className='status'>Status : <span>{each.status}</span></p>
               </div>

               <div className='two-btns'>
               <Link to = "/update"> <button type='button' className='join-btn'>Update</button></Link>
                <button type='button' className='login-btn' onClick={e => deleteTask(each.id)}>Delete</button>
               </div>
                
                </li>
       
      ))}
  </ul>  : <p className='nodata'>No Data Found</p>
     }
    </>
  )
}

export default ViewTask