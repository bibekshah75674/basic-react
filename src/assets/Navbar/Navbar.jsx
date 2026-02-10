import "./Navbar.css"

function Navbar(props){
    return(
        <>
            <div className="header" >

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
            <h1 className="heading text-red-600 ">Hello world</h1>
            <p className="text-green-950">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, corporis.</p>

        </>
    )
}

export default Navbar