import React,{Component} from "react";
import axios from "axios";
import "./NewTodoForm.css"
class NewTodoForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            text:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleChange(e)
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
            );
    }
    handleSubmit(e)
    {
        e.preventDefault();

       var newtodo={
           text:this.state.text
        };
        this.setState(
            {
                text:""
            }
        )
       console.log(newtodo);
       axios.post("https://todo-list-excalibur.herokuapp.com/createtodo",newtodo).then(response=>
       {
            console.log(response.data);
           
            this.props.create(response.data);
       })
       

    }
  
    render()
    {
        return(
           <form className="Newtodoform" onSubmit={this.handleSubmit}>
               
               <input name="text" type="text" placeholder="New todo" id="text" value={this.state.text} onChange={this.handleChange}/>
               <button>Add Todo</button>
           </form>
        )
    }
}
export default NewTodoForm;