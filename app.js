var express=require("express");
var app=express();
var cors=require("cors");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var path=require("path");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/todo_react", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
var Todo=require("./models/todo.js");

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const port=process.env.PORT || 1000;

app.get("/getalltodos",function(req,res)
{
    Todo.find({},function(err,todos)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(todos);
        }
    })
})

app.post("/createtodo",function(req,res)
{
    Todo.create(req.body,function(err,todo)
    {
        
        err?console.log(err):res.json(todo);
    })
});
app.post("/updatetodo/:id",function(req,res)
{
   
   Todo.findByIdAndUpdate(req.params.id,req.body,function(err,todo)
   {
     
            if(err)
            {
                console.log(err);
            }
            else
            {
                
                Todo.find({},function(err,todos)
                {
                    err?console.log(err):res.json(todos);
                })
            }
   }
   )
});
app.post("/deletetodo/:id",function(req,res)
{
  Todo.findByIdAndDelete(req.params.id,function(err,todo)
  {
      if(err)
      {
          console.log(err);
      }
      else
      {
          
          Todo.find({},function(err,todos)
          {
                err?console.log(err):res.json(todos);
          })
      }
  })
})


if(process.env.NODE_ENV==="production")
{
    app.use(express.static("client/build"));
    app.get("*",function(req,res)
    {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}
app.listen(port,function()
{
    console.log(`Server has started on port ${port}`);
});