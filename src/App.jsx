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

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar title={"Foolish Developer1"} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Homepage</h1>} />
            <Route path="courses" element={<CourseLists />} />
            <Route path="courses/:id" element={<CourseDetailPage/>} />
            
            <Route path="todolist" element={<TodoList />} />
            <Route path="darkmode" element={<DarkMode />} />
            <Route path="/*" element = {<h1>Page not found</h1>}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
