import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(props){
    return(
        <>
            <div className="header" >

                <h1>{props.title}</h1>

                <nav className="nav-bar">
                    <ul className="list-items">
                        <li className="list-item"><Link to="/">Home</Link></li>
                        <li className="list-item"><Link to="/courses">Course List</Link></li>
                        <li className="list-item"><Link to="/todolist">Todo List</Link></li>
                        <li className="list-item"><Link to="/darkmode">Darkmode</Link></li>
                    </ul>
                </nav>
            </div>
            {/* <h1 className="heading text-red-600 ">Hello world</h1>
            <p className="text-green-950">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, corporis.</p> */}

        </>
    )
}

export default Navbar