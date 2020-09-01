import React,{Component} from "react";
import edit from "./edit.png";
import del from "./delete.png";
import "./Todo.css";
class Todo extends Component
{
    constructor(props)
    {
        super(props);
       this.state={
           editing:false,
           text:this.props.text
       }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleClick()
    {
        this.props.delete(this.props.id);
    }
    handleChange(e)
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    handleSubmit(e)
    {
        e.preventDefault();
        var newtodo={
            text:this.state.text
        }
        this.setState({
            editing:!this.state.editing
        })
        this.props.update(this.props.id,newtodo);
    }
    handleToggle()
    {
        this.setState(
            {
                editing:!this.state.editing
            }
        )
    }
    
    render()
    {
        return(
            <div>
                    {this.state.editing?
                    (
                        <div className="Todo">
                                 <form className="Edit-form" onSubmit={this.handleSubmit}>
                                    <input  className="Edit-input" name="text" value={this.state.text} onChange={this.handleChange}/>
                                    <button className="Edit-submit">Save</button>
                                </form>
                        </div>
                       
                    ):(

                        <div className="Todo">
                             <div className="Text">
                                 {this.props.text}
                            </div>
                           
                            <div className="Flexbox">
                                    <div className="Edit-button" onClick={this.handleToggle}>
                                        <img className="Edit-image" src={edit}/>
                                    </div>
                                    <div className="Delete-button" onClick={this.handleClick}>
                                    <img className="Delete-image" src={del}/>
                                    </div>
                            </div>
                            
                           
                         </div>

                    )}
                   
                  
                
            </div>
        )
    }
}
export default Todo;