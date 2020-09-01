import React,{Component} from "react";
import axios from "axios";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import {CSSTransition,TransitionGroup} from "react-transition-group";
import "./Todolist.css";
const baseurl=`http://localhost:1000`;
class Todolist extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            todos:[],
            loading:true
        }
        this.create=this.create.bind(this);
        this.delete=this.delete.bind(this);
        this.update=this.update.bind(this);
    }
    componentDidMount()
    {
        axios.get(`${baseurl}/getalltodos`).then(response=>
            {
                this.setState(
                    {
                        todos:response.data,
                        loading:false
                    }
                )
            })
        
    }
    create(newtodo)
    {
        console.log(newtodo);
        var newtodolist=this.state.todos;
        newtodolist.push(newtodo);
        this.setState(
            {
                todos:newtodolist
            }
        )
    }
    delete(id)
    {
        for(var i=0;i<this.state.todos.length;i++)
        {
            if(this.state.todos[i]._id===id)
            {
                axios.post(`${baseurl}/deletetodo/${id}`).then(response=>
                {
                    this.setState({
                        todos:response.data
                    })
                })
            }
        }

    }
    update(id,newtodo)
    {
        console.log("id="+id+"todo="+newtodo);
        for(var i=0;i<this.state.todos.length;i++)
        {
            if(this.state.todos[i]._id===id)
            {
                axios.post(`${baseurl}/updatetodo/${id}`,newtodo).then(response=>
                {
                    this.setState(
                        {
                            todos:response.data
                        }
                    )

                })
            }
        }
       
    }
   
    render()
    {
        return(
            <div>
                {this.state.loading?
                (
                <div className="loader">
                    
                </div>
                ):(
                    <div className="TodoList">
                    <h1>Todo List <span>A React Todo List App</span></h1>

                    <NewTodoForm create={this.create}/>

                    <ul>
                        <TransitionGroup>
                        {this.state.todos.map(todo=>
                        <CSSTransition key={todo._id} classNames="fade" timeout={500}>
                        <Todo
                            key={todo._id}  
                            id={todo._id}
                            text={todo.text}
                            delete={this.delete}
                            update={this.update}/>
                            </CSSTransition>
                            )}

                        </TransitionGroup>
                            
                    </ul>
                    
                </div>

                )
                }
                       
            </div>
        )
    }
}
export default Todolist