import React from 'react';
import Hero from './Hero';
import Category from './Category';
import Products from './Products';
import TrendingProducts from './TrendingProducts';
import TopSellingProducts from './TopSellingProducts';
import DailyDiscover from './DailyDiscover';
import FeaturedBrandsAndSales from './FeaturedBrandsAndSales';
import SectionBanner from './SectionBanner';
import sb1 from "../../public/images/sb1.png"
import sb2 from "../../public/images/sb2.jpg"
const Home = () => {
    return (
        < div className='container-fluid bg-secondary-subtle overflow-hidden'>
           <Hero />
           <Products/>
           <TrendingProducts />
           <FeaturedBrandsAndSales/>
           <TopSellingProducts/>
           <SectionBanner 
            imageLink={sb1}
            alttext=""
            height={172}
            width={1373}
           />
           <DailyDiscover/>
           <SectionBanner 
            imageLink={sb2}
            alttext=""
            height={172}
            width={1373}
           />
        </ div>
    );
};

export default Home;