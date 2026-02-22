import BlogPage from "./assets/BlogPage";
// import {UserList} from "./assets/UserList";
import NewsPortal from "./assets/NewsPortal";

// import NewTodoList from "./assets/Class/Newtodolist";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import BlogDetailPage from "./BlogDetailPage";
import NewNav from "./assets/NewNav";


function App() {
  return (
    <>
    <NewNav title={"My Website"}/>
      {/* <NewTodoList/> */}
      {/* <BlogPage/> */}
      {/* <UserList/> */}
      <Routes>
        <Route path="/" element={<h1>This is the home page</h1>}></Route>
        <Route path="about" element={<h1>This is about page</h1>}></Route>
        <Route path="blogs" element={<BlogPage/>}></Route>
        <Route path="news" element={<NewsPortal/>}></Route>
        <Route path="contact" element={<h1>This is contact page</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
