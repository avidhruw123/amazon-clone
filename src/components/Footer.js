import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
        <div className='back'>
            Back to top
        </div>
        <div className='footer-container'>
            <div>
               <div className='footer-title'>Get to Know Us</div> 

               <div className='f' >About us</div>
               <div className='f'>Careers</div>
               <div className='f'>Press Releases</div>                            
               <div className='f'>Amazon Science</div>
            </div>

            <div>
            <div className='footer-title'>Connect with us</div> 

            <div className='f'>Facebook</div>
            <div className='f'>Twitter</div>
            <div className='f'>Instagram</div> 
            </div>

            <div>
            <div className='footer-title'>Make Money with us</div> 

            <div className='f'>Sell on Amazon</div>
            <div className='f'>Sell under Amazon Accelerator</div>
            <div className='f'>Protect and Build Your Brand</div>
            <div className='f'>Amazon Global Selling</div>
            <div className='f'>Become an Affiliate</div>
            <div className='f'>Fulfilment by Amazon</div>
            <div className='f'>Advertise Your Products</div>
            <div className='f'>Amazon Pay on Merchants</div>

            </div>

            <div>
                <div className='footer-title'>Let Us Help You</div>
                <div className='f' >COVID-19 and Amazon</div>                
                <div className='f'>Your Account</div>
                <div className='f'>Returns Centre</div>
                <div className='f'>100% Purchase Protection</div>
                <div className='f'>Amazon App Download</div>
                <div className='f'>Amazon Assistant Download</div>
                <div className='f'>Help</div>
            </div>
        </div>
        <div>
        <div className='footer__logo'><img src="https://pngimg.com/d/amazon_PNG25.png" className="logo" alt="" /></div>
          <div className='copyright'>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
         
        </div>
        

    </footer>
  )
};

export default Footer;
