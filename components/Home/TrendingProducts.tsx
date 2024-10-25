import Cardcase from '../ui/cardcase';
import ProductCard from './ProductCard';
const TrendingProducts = () => {
    return (
        <div className='gap-20 '> 
        <Cardcase cardTitle='Trending products' cardBtntext="show all" cardBtnLink="/">
        <div className='d-flex gap-3'>
            <ProductCard bgColor='#000'/>
            <ProductCard bgColor='#000'/>
            <ProductCard bgColor='#000'/>
            <ProductCard bgColor='#000'/>
            <ProductCard bgColor='#000'/>
            <ProductCard bgColor='#000'/>
          </div>
        </Cardcase>
        </div>

    );
};


export default TrendingProducts;