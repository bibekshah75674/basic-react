import "./Footer.css";

import facebook from "./images/icons8-facebook-32.png";
import instagram from "./images/icons8-instagram-32.png";
import linkedin from "./images/icons8-linkedin-32.png";
import youtube from "./images/icons8-youtube-32.png";

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-content">
            
                <h2>Foolish Developer</h2>

                <div className="paragraph-content">
                    <p>Foolish Developer is a blog website where you will find great tutorials on web design and developer.Here each turorial is beautifully descriped step by step with the required source code.</p>
                </div>

                <div className="logos">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={youtube} alt="youtube" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer