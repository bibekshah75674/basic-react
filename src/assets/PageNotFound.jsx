import React from 'react'
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="container">
        <h1>404</h1>
        <h2>Oops,This Page Not Found!</h2>
        <h4>The link might be corrupted,</h4>
        <p>or the page may have been removed.</p>

        <Link to="/"><button>Go Back to Homepage</button></Link>
      </div>
    </>
  )
}
export default PageNotFound;
