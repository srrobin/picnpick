import React from 'react';
import FeaturedBrands from './FeaturedBrands';
import Image from 'next/image';
import SaleBanner from "../../public/images/sales-banner.png"

const FeaturedBrandsAndSales = () => {
    return (
        <div className='row'>
            <div className='col-md-4'> 
                <FeaturedBrands/>
            </div>
            <div className='col-md-8'>
                <Image  
                 src={SaleBanner}
                 alt=''
                 height={416}
                 width={908}
                 objectFit='cover'
                 className='rounded'
                />
            </div>
        </div>
    );
};

export default FeaturedBrandsAndSales;