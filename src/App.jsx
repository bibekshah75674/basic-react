import { useState } from "react";
import "./App.css";
import Navbar from "./assets/Navbar/Navbar";
import Content from "./assets/Content/Content";
import Footer from "./assets/Footer/Footer";
import DarkMode from "./assets/DarkMode/DarkMode";
import TodoList from "./assets/class/todolist";
// import State from './assets/State'

// import NewTodoList from './assets/Class/Newtodolist'

// import ProductLists from './assets/ProductList'
import { CourseDetailPage } from "./assets/CourseDetailPage";
import CourseLists from "./assets/CourseList";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TextForm from "./assets/TextForm";
import PageNotFound from "./assets/PageNotFound";
import BlogPage from "./assets/BlogPage";


function App() {
  return (
    <>
      <BlogPage/>
    </>
  );
}

export default App;
