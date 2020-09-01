import React,{Component} from "react";
import "./About.css";
import me from "./me.jpg"
class About extends Component
{
    render()
    {
        return(
            <div>
                    <h1 className="About-heading">About Page</h1>
                    <img className="my-image" src={me}/>
                   <div className="About-content">
                       
                   <p>Hi there! I'm Ankur.</p>
<p>Thank you for visiting My Todo List App, built with NodeJs ,React and MongoDb database.</p>

<p>"If you can do what you do best and be happy, you're further along in life than most people."-Leonardo DiCaprio.
A speech and quote which I am a firm believer of. To start with myself, I am a dedicated student pursuing Btech with a insatiable fascination
for technology. I am a passionate programmer, who loves to code. I can say I'm pretty confident and proficient in
programming languages like C, java, Python and javascript.Apart from tech domain I love to draw and find myself immersed
in design and art.Life is short and we must make the most of it. Thus I will continue to stir myself with skills
and knowledge, as there is so much yet to learn.</p>
                   </div>
            </div>
        )
    }
}
export default About;