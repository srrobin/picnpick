import Cardcase from '../ui/cardcase';
import TopSellingCard from './TopSellingCard';
const TopSellingProducts = () => {
    return (
        <div className='gap-20 '> 
        <Cardcase cardTitle='Top Selling Products' cardBtntext="show all" cardBtnLink="/">
             <div className='d-flex gap-3 flex-wrap'>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
                <TopSellingCard/>
             </div>
        </Cardcase>
        </div>

    );
};



export default TopSellingProducts;