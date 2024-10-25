import Cardcase from '../ui/cardcase';
import ProductCard from './ProductCard';
const Products = () => {
    return (
        <div className='gap-20 '> 
        <Cardcase cardTitle='products' cardBtntext="show all" cardBtnLink="/">
          <div className='d-flex gap-3'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </Cardcase>
        </div>

    );
};

export default Products;