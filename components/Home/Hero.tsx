import Image from 'next/image';
import React from 'react';
import h1 from "../../public/images/h1.jpg"
import h2 from "../../public/images/h2.png"
import h3 from "../../public/images/h3.png"
import h4 from "../../public/images/s1.png"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Hero = () => {
    return (
        <div className=' pt-3'>
            <div className='row main-slider home-section'>
                <div className='col-md-10'>
                <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Image 
                    src={h1}
                    alt='hero image'
                    height={500}
                    width={600}
                    // sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    objectFit='cover'
                    className='d-block w-100 rounded '
                    />
                    </div>
                    <div className="carousel-item">
                    <Image 
                    src={h2}
                    alt='hero image'
                    height={500}
                    width={600}
                    // sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    objectFit='contain'
                    className='d-block w-100 rounded'
                    />
                    </div>
                    <div className="carousel-item">
                    <Image 
                    src={h1}
                    alt='hero image'
                    height={600}
                    width={400}
                    // sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderRadius:"6px" }} // optional
                    objectFit='contain'
                    className='d-block w-100 rounded rounded'
                    />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                    <GrFormPrevious />
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                    <GrFormNext />
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                <div className='col-md-2'>
                    <div className='row'>
                        <div className='col-md-12'> 
                        <Image 
                            src={h3}
                            alt='hero image'
                            height={200}
                            width={400}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                            objectFit='cover '
                            className='rounded'
                            />
                        </div>
                        <div className='col-md-12 mt-4'> 
                        <Image 
                            src={h4}
                            alt='hero image'
                            height={200}
                            width={400}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                            objectFit='cover'
                            className='rounded'
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;