import React from 'react';
import './footer.css';
import logo from '../../assets/UpSurgeLogo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand and Social Icons */}
        <div className="footer-col brand-col">
          <img src={logo} alt="UpSurge Logo" className="footer-logo-img" />
          <p className="footer-company">UpSurge Hosting</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://discord.gg/upsurgehost" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
            <a href="https://youtube.com/@upsurgehost" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://twitter.com/upsurgehost" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            <a href="https://tiktok.com/@upsurgehost" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Games */}
        <div className="footer-col">
          <h4>Games</h4>
          <ul>
            <li><a href="https://billing.upsurgehost.com/index.php/store/game-servers-pc/minecraft-java-edition" target="_blank" rel="noopener noreferrer">Minecraft</a></li>
            <li><a href="https://billing.upsurgehost.com/index.php/store/game-servers-pc/rust" target="_blank" rel="noopener noreferrer">Rust</a></li>
            <li><a href="https://billing.upsurgehost.com/index.php/store/game-servers-pc/ark-survival-ascended" target="_blank" rel="noopener noreferrer">ARK</a></li>
            <li><a href="https://billing.upsurgehost.com/index.php/store/game-servers-pc/palword" target="_blank" rel="noopener noreferrer">Palworld</a></li>
            <li><a href="https://billing.upsurgehost.com/index.php/store/game-servers-pc/fivem" target="_blank" rel="noopener noreferrer">Five M</a></li>
            <li><a href="https://upsurgehost.com/games" target="_blank" rel="noopener noreferrer">View All Games</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="https://upsurgehost.com/about" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="https://upsurgehost.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="https://upsurgehost.com/affiliates" target="_blank" rel="noopener noreferrer">Affiliates</a></li>
            <li><a href="https://upsurgehost.com/partners" target="_blank" rel="noopener noreferrer">Partners</a></li>
            <li><a href="https://upsurgehost.com/branding" target="_blank" rel="noopener noreferrer">Branding</a></li>
            <li><a href="https://upsurgehost.com/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="https://upsurgehost.com/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <li><a href="https://upsurgehost.com/knowledgebase" target="_blank" rel="noopener noreferrer">Knowledgebase</a></li>
            <li><a href="https://upsurgehost.com/multicraft" target="_blank" rel="noopener noreferrer">Multicraft KB</a></li>
            <li><a href="https://upsurgehost.com/sla" target="_blank" rel="noopener noreferrer">SLA</a></li>
            <li><a href="https://upsurgehost.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://upsurgehost.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
          </ul>
        </div>

        {/* Technology */}
        <div className="footer-col">
          <h4>Technology</h4>
          <ul>
            <li><a href="https://panel.upsurgehost.com" target="_blank" rel="noopener noreferrer">Control Panel</a></li>
            <li><a href="https://billing.upsurgehost.com" target="_blank" rel="noopener noreferrer">Client Area</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UpSurge Hosting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
