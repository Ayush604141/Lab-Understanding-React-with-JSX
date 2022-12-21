import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  render(){
  // Code here.
  this.Output = [];
  this.imageData().forEach((image)=>{
    this.element = <div>
      <img src={elephant} height={500} width={500} alt="Elephant"/>
    </div>
    this.Output.push(this.element);
  })
  return (<div className="gridElement">
    {this.Output}
  </div>)
  }
}
