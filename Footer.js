// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>LOUVRE, ailenizle, arkadaşlarınızla veya iş toplantılarınızda keyifli zaman geçirebileceğiniz bir ortam sunuyor. Kendi alanlarında uzman şeflerimiz tarafından hazırlanan yaratıcı yemeklerimiz, damak zevkinize uygun çeşitlilik sunuyor.</p>
        </div>
        <div className="footer-section">
          <h3>Çalışma Saatlerimiz</h3>
          <p>Pazartesi - Cuma: 10:00  -22:00 </p>
          <p>Cumartesi - Pazar: 11:00  - 23:00 </p>
        </div>
        <div className="footer-section">
          <h3>Bizimle İletişime Geçin</h3>
          <p>Telefon: +1234567890</p>
          <p>Email: info@example.com</p>
          <p>Adres: 123 Main Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

