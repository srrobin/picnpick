import React from 'react';
import Hero from './Hero';
import Category from './Category';
import Products from './Products';
import TrendingProducts from './TrendingProducts';
import TopSellingProducts from './TopSellingProducts';
import DailyDiscover from './DailyDiscover';

const Home = () => {
    return (
        < div className='container-fluid bg-secondary-subtle overflow-hidden'>
           <Hero />
           <Products/>
           <TrendingProducts />
           <TopSellingProducts/>
           <DailyDiscover/>
        </ div>
    );
};

export default Home;