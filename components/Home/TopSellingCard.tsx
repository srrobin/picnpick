import Image from 'next/image';
import React from 'react';
import p1 from "../../public/images/p1.jpg";


interface ProductCardProps {
    bgColor?: string;
    cardBorder?: string;
}

const TopSellingCard: React.FC<ProductCardProps> = () => {
    return (
        <div className='topselling__card'>
            <Image 
                src={p1}
                alt='product image'
                height={53}
                width={53}
                objectFit='cover'
            />
            <div className='right_area'> 
                <div className='topselling__title'>Stylish coffee cup and saucer</div>
                <div className='topselling_price__discount'>
                    <div className='priv__price'>৳ 1,600</div>
                    <div className='current__price'>৳ 1,100</div>
                    <div className='discount__rate'> -32% </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingCard;