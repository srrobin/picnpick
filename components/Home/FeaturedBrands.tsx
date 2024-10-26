import Image from 'next/image';
import React from 'react';
import b1 from "../../public/images/b1.png"
import b2 from "../../public/images/b2.png"
import b3 from "../../public/images/b3.png"
import b4 from "../../public/images/b4.png"
import b5 from "../../public/images/b5.png"
import b6 from "../../public/images/b6.png"
import b8 from "../../public/images/b8.png"

const FeaturedBrands = () => {
    return (
        <div className="card " style={{ minHeight: "300px" }}>
            <div className="card-header card__header" style={{borderBottom: "none", background:"#fff"}}>
                <div className='card__title'>Featured Brands</div>
                    <div className='card__button'>
                        <a className='card__link' href="/">Show All</a>
                    </div>
            </div>
            <div className="card-body">
                <div className='all__features d-flex  align-items-center flex-wrap '>
                    <div className='single__features'>
                        <Image 
                         src={b1}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                         className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                    <div className='single__features'>
                        <Image 
                         src={b2}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                         className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                    <div className='single__features'>
                        <Image 
                         src={b3}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                        className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                    <div className='single__features'>
                        <Image 
                         src={b4}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                         className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                    <div className='single__features'>
                        <Image 
                         src={b5}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                         className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                    <div className='single__features'>
                        <Image 
                         src={b6}
                         alt=''
                         width={97}
                         height={97}
                         objectFit='cover'
                         className='rounded-circle pt-2'
                        />
                        <div className='brandName'>Addidus</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrands;