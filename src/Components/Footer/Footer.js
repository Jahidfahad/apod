import React from 'react';
import './Footer.css'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  
    console.log(date)
    return (
        <div className="footer">
            <p><small> Copyright©{year} Jahid Fahad</small></p>
        </div>
    );
};

export default Footer;