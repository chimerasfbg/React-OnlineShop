import React from "react";
import {FiFacebook ,FiInstagram,FiTwitter,FiGitlab,FiLinkedin} from 'react-icons/fi'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="relative">
      <div className="footer">
        <div class="footer-content">
          <h3>Lorem Footer</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas, doloremque ab vel pariatur minus.</p>
          <ul class="socials">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FiFacebook/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <FiInstagram/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <FiTwitter/>
              </a>
            </li>
            <li>
              <a href="https://www.gtihub.com" target="_blank">
                <FiGitlab/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank">
               <FiLinkedin/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
