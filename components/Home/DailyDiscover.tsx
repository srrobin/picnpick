import Cardcase from '../ui/cardcase';
import ProductCard from './ProductCard';
const DailyDiscover = () => {
    return (
        <div className='gap-20 '> 
        <Cardcase cardTitle='Daily discover'  cardBtnLink="/">
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


export default DailyDiscover;