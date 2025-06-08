import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
  <div className="footbar">
    <div className="foot-font-regular">
    <p>© Himpunan Mahasiswa Teknik Telekomunikasi 2024</p>
    <p className="foot-credits">Developed by Ridho Alharits, Naili Ikrimah, Naufal Shidiq</p>
    </div>

    <div className="foot-font-semibold">
      <p>Contact Us</p>
        <div className="social-links">
          <a className="social-item" href="https://www.instagram.com/hmtt_telco/"><img src="/icon/instagram_logo.png" alt="Instagram" /></a>
          <a className="social-item" href="https://line.me/ti/p/~hmtt_telco"><img src="/icon/line_logo.png" alt="Line" /></a>
          <a className="social-item" href="https://twitter.com/hmtt_telco"><img src="/icon/twitter_logo.png" alt="X" /></a>
          <a className="social-item" href="https://www.youtube.com/@HMTTTelco"><img src="/icon/youtube_logo.png" alt="YouTube" /></a>
          <a className="social-item" href="https://www.tiktok.com/@hmtt_telco"><img src="/icon/tiktok_logo.png" alt="Tiktok" /></a>
        </div>
      </div>
  </div>
  
  );
};

export default Footer;
