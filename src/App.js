import React, {useState} from "react"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import ViewTask from "./components/ViewTask";

import './App.css';
import UpdateTask from "./components/UpdateTask";



export const Context = React.createContext()

const App = () => {

  const [valuesList, setValuesList] = useState( JSON.parse(localStorage.getItem("task") || "[]"))

    return(

    

     <>
       <Context.Provider value={[valuesList, setValuesList]}>
       
      
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} ></Route>
        <Route path = "/viewtask" element = {<ViewTask />} ></Route>
        <Route path = "/update" element = {<UpdateTask />} ></Route>
       
      </Routes>
      </BrowserRouter>
      </Context.Provider>
     </>

    )
  }


export default App;