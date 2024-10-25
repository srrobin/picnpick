import { relatedProducts, singleProducts } from "@/Request/CategoryRequest";
import { Products } from "@/type";
import Image from "next/image";
import AddCart from "./add-cart";
import ProductCard from "@/components/Home/ProductCard";

const SingleProduct = async ({params}: {params: {id: string}}) => {
    const id = params.id;
    const singleProsuct: Products = await singleProducts(id);

    const relatedProsuct: Products[] = await relatedProducts(singleProsuct.category);
    console.log("🚀 ~ SingleProduct ~ relatedProsuct:", relatedProsuct)
    
    
    return (
        <div className="mt-20">
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
                  <div className="col-span-3 mb-6 lg:mb-0">
                  <Image
                    src={singleProsuct.image}
                    alt="Picture of the author"
                    width={400}
                    height={400} 
                    />
                  </div>
                  <div className="col-span-4">
                       <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">{singleProsuct.title}</h1>
                       <p className="text-xl md: 2xl font-bold text-green-700"> $ {singleProsuct.price }</p>
                       <p className="text-base text-black opacity-65">
                        {singleProsuct.description}
                       </p>

                       <AddCart product={singleProsuct}/>
                  </div>
            </div>
            

            <div className='pt-16 pb-12 mt-12 w-4/5 mx-auto'> 
            <h1 className='capitalize  text-2xl font-bold mb-20 text-cyan-700'>Related Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10'>
                  {relatedProsuct?.map((item) => (
                    <ProductCard key={item.id} item={item}/>
                  ))}
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;