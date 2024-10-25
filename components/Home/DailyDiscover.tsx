import Cardcase from '../ui/cardcase';
import ProductCard from './ProductCard';
const DailyDiscover = () => {
    return (
        <div className='gap-20 '> 
        <Cardcase cardTitle='Daily Discover' cardBtntext="" cardBtnLink="/">
        <div className='d-flex gap-3 flex-wrap'>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
            <ProductCard cardBorder=' 3px solid #000'/>
          </div>
        </Cardcase>
        </div>

    );
};



export default DailyDiscover;