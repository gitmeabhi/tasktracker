import {Component} from "react"
import Header from "../Header"


import "./index.css"
import AddTask from "../AddTask"

class Home extends Component{

    render(){
        return(
            <div className="home-cont">
                <Header />
             <div className="home-container">
               
               <AddTask />
             </div>
            </div>
        )
    }
}

export default Home