import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Todolist from "./Todolist";
import About from "./About.js";
import Navbar from "./Navbar";
import {TransitionGroup,CSSTransition} from "react-transition-group";

import "./App.css";

class App extends Component
 {
  
   
   render()
   {
    return (
      <div className="App">
        <div className="App-Navbar">
           <Navbar/>
        </div>
        
        <div className="App-Component">
          
             
                  <Switch >
                    <Route exact path="/" render={()=>
                    <div className="page">
                        <Todolist/>
                    </div>
                  

                    }/>
                    <Route exact path="/about" render={()=>
                    <div className="page">
                        <About/>
                    </div>
                    
                    }/>
      
                  </Switch>
               
          
          

          
         
        </div>
       
      
      </div>
    );
   }
 
}

export default App;
