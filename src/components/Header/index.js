import {Link} from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import "./index.css"

const Header = () =>{

    const  onClickMenu =() => {
        var x = document.getElementById("headerItems");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return(
        <nav className="nav-bar">
             <Link to ="/" className="link">
             <h1 className="logo">Task Tracker</h1>
               </Link>
            
            <ul className="list-items" id="headerItems">
               <Link to ="/" className="link">
               <li className="item">
                Home
               </li>
               </Link>
               <Link to ="/viewtask" className="link">
               <li className="item">
                ViewTasks
               </li>
               </Link>
            </ul>

            <button type="button" className="menu" id="menuIcon"  onClick={onClickMenu}><IoMenu size={30} /></button>
        </nav>
    )
}

export default Header