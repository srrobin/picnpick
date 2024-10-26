import Image from 'next/image';
import React from 'react';
import footerLogo from "../../public/images/footer_logo-1714203696-7.png";
import paymentMethod from "../../public/images/payment.svg";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import bgImage from "../../public/images/footer.svg";

const bgStyle = {
  backgroundColor: "#000",
  backgroundImage: `url(${bgImage.src})`,  
  backgroundRepeat: "repeat",
  backgroundSize: "28px 28px",
  color: "#c7c7c7",
  paddingBottom: "20px",
  paddingTop: "30px"
};

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='container'>
                <div className='footer__top_area'>
                    <div className='footer__logo'>
                        <a href='/'>
                            <Image
                                src={footerLogo}
                                alt='footer logo'
                                width={200}
                                height={50}
                                className='text-center'
                            />
                        </a>
                    </div>
                    <div className='payment__method'>
                        <Image
                            src={paymentMethod}
                            alt='payment methods'
                            width={330}
                            height={15}
                            className=''
                        />
                    </div>
                </div>
            </div>
            <div className='footer__area' style={bgStyle}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'>Important Links</div>
                                <div className='footer__link'>About</div>
                                <div className='footer__link'>Faq</div>
                                <div className='footer__link'>Contact</div>
                                <div className='footer__link'>Help  </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'>About</div>
                                <div className='footer__link'>Refund Policy</div>
                                <div className='footer__link'>Privacy Policy</div>
                                <div className='footer__link'>Help</div>
                                <div className='footer__link'>Sitemap</div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'>Category</div>
                                <div className='footer__link'>Kids & Toys</div>
                                <div className='footer__link'> Formal Shoes</div>
                                <div className='footer__link'>Travel Bags & Backpacks </div>
                                <div className='footer__link'>Tools, DIY & Outdoors  </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='footer__block'>
                                <div className='footer__title'> Social</div>
                                <div className='footer__link'>
                                    <FaYoutube  size={16} style={{ fill: '#ED1F25',marginRight:"8px" }} />  YouTube
                                 </div>
                                <div className='footer__link'>
                                    <FaWhatsapp size={16} style={{ fill: 'green',marginRight:"8px" }}/>  Whatsapp
                                 </div>
                                <div className='footer__link'>
                                    <FaInstagram size={16}  style={{ fill: '#ED1F25',marginRight:"8px" }}/> Instagram
                                </div>
                                <div className='footer__link'>
                                    <FaFacebookF size={16}  style={{ fill: 'blue',marginRight:"8px" }}/> Facebook
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright__area text-center">
                        <div className="copyirgt__text">
                            © 2024 - picnpick All rights reserved. Developed by PnH IT Solution
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
