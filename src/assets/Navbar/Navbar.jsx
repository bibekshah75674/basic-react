import "./Navbar.css"

function Navbar(props){
    return(
        <>
            <div className="header">

                <h1>{props.title}</h1>

                <nav className="nav-bar">
                    <ul className="list-items">
                        <li className="list-item"><a href="#">Home</a></li>
                        <li className="list-item"><a href="#">About</a></li>
                        <li className="list-item"><a href="#">Service</a></li>
                        <li className="list-item"><a href="#">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Navbar