import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import home from "./home.png";
import about from "./info.png";
class Navbar extends Component
{
    render()
    {
        return(
            <div id="Navbar">
                <div>
                        <div className="Navbar-home">
                            <NavLink activeClassName="active" exact to="/">
                                 <img src={home} className="Home"  />
                            </NavLink>
                        </div>
                    <div className="Navbar-about">
                            <NavLink activeClassName="active" exact to="/about">
                                <img src={about} className="About"  />   
                            </NavLink>
                    </div>
                </div>
                
               
            </div>
        )
    }
}
export default Navbar;