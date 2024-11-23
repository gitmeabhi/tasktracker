import React, {  useEffect, useState} from "react"

import {v4 as uuidv4} from "uuid"

import "./index.css"



const AddTask = () =>{
    

    const [values, setValues] = useState({
        id : uuidv4(),
        title : '',
        description : '',
        duedate : '',
        status : ''
      })


  const [valuesList, setValuesList] = useState( JSON.parse(localStorage.getItem("task") || "[]"))


useEffect(() => {
    localStorage.setItem('task', JSON.stringify(valuesList))
  },[valuesList])
  

  




 const addPostDataToTable = (e) =>{
     e.preventDefault()
    
    setValuesList([...valuesList, values]);
    window.location.reload()
  }

   
  const handleChange = (event) =>{
     setValues((prevState) => ({...prevState, [event.target.name] : event.target.value}))
  }


  

 

    return(
        <div className="blog-container">
              <div className="total">
              <div className="add-post-container">
                <h1 className="add-text">Add Task</h1>
               
            </div>
            <form className="add-form" id="addPostFor" onSubmit={addPostDataToTable}>
              <label htmlFor="title" className="post-label">Title</label>
              <input type="text" id="title" className="input-element" name="title" onChange={handleChange} value={values.title} placeholder="Enter Task Title" />
              
              <label htmlFor="desc" className="post-label">Description</label>
              <textarea id="desc" className="desc-input" name="description" onChange={handleChange} value={values.description} placeholder="Enter Task Description" rows="4" cols="50" />

              <label htmlFor="dates" className="post-label">Due date</label>
              <input type="date" id="dates" className="input-element" name="duedate" onChange={handleChange} value={values.duedate}  />

              <label htmlFor="status" className="post-label">Status</label>
              <input type="text" id="status" className="input-element" name="status" onChange={handleChange} value={values.status} placeholder="Enter Task Status" />
              <button type="submit" className="save-btn" >Add</button>
            </form>

            
              </div>
            
           
        </div>
        
    )
    
}


export default AddTask