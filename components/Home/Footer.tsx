import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='pt-12 mt-3.5'>
            <div className='
            w-4/5 mx-auto grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-4 gap-10
            border-b-2 border-b-slate-400 pb-12
            '>
               <div className=''> 
                <h1 className='text-lg font-bold uppercase mb-3'>web7 shop</h1>
                <p className='text-base opacity-70'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem tempora molestiae corrupti.
                </p>
               </div>
                <div className='footer__block'>
                    <h3 className='footer__title'>information</h3>
                    <p className='footer__link'>about us</p>
                    <p className='footer__link'>privacy policy</p>
                    <p className='footer__link'>Terms & privacy</p>
                    <p className='footer__link'>Careers  </p>
                    <p className='footer__link'>Security </p>
                </div>
                <div className='footer__block'>
                    <h3 className='footer__title'>Download</h3>
                    <p className='footer__link'>iOS & Android</p>
                    <p className='footer__link'>Mac & Windows</p>
                    <p className='footer__link'>Calendar</p>
                    <p className='footer__link'>Web Clipper </p>
                </div>
                <div className='footer__block'>
                    <h3 className='footer__title'> Resources</h3>
                    <p className='footer__link'>Help center</p>
                    <p className='footer__link'>Pricing</p>
                    <p className='footer__link'>Community</p>
                    <p className='footer__link'>Integrations</p>
                    <p className='footer__link'>Templates</p>
                </div>
            </div>

            <div className='
            w-4/5 mx-auto py-7 grid grid-cols-1
            md:grid-cols-2 justify-between gap-8
            '>
                <p className='text-base text-black opacity-65 capitalize font-normal'>
                    @ copyright web7 shop
                </p>
                <Image 
                 src={"/cards.png"}
                 alt='cards'
                 height={145}
                 width={200}
                 className='sm:ml-auto object-contain'
                />
            </div>
        </div>
    );
};

export default Footer;