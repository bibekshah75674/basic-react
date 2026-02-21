import BlogPage from "./assets/BlogPage";
// import {UserList} from "./assets/UserList";
// import NewsPortal from "./assets/NewsPortal";

// import NewTodoList from "./assets/Class/Newtodolist";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import BlogDetailPage from "./BlogDetailPage";


function App() {
  return (
    <>
      {/* <NewTodoList/> */}
      {/* <BlogPage/> */}
      {/* <UserList/> */}
      {/* <NewsPortal/> */}
      <Routes>
        <Route path="/" element={<BlogPage/>}></Route>
        <Route path="blogs" element={<BlogDetailPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
