//U6899-7808
//Main branch for all the modules
import react from "react";
import FancyText from "./FancyText";
import TaskGenerator from "./TaskGenerator";
import Footer from "./Footer";
import './App.css'

export default function Display(){

  return (
    <div>
       <FancyText title text="To do List"/>
       <TaskGenerator/>
       <Footer year={new Date().getFullYear()}/>
    </div>
  )
}