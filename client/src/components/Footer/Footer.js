import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><a href="https://github.com/tomkent321/dorisrx" target="blank"><span><img className='logo' src="assets/images/github.png"/></span> Github</a></li>
                <li><a href="https://docs.google.com/document/d/1hmJwI8VdhmWwwZAqUk8WRA-iKPNAXHpNeaWE01SHs10/edit?usp=sharing" target="blank">© 2018 <span class="font">DorisRx</span></a></li>
                <li><span><img className='logo' id="reactLogo" src="assets/images/react-logo.png"/></span> Powered By React</li>
                


            </ul>
        </div>
    </footer>
)



export default Footer;