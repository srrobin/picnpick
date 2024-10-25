import React from 'react';
import brandLogo from "../../public/images/header_logo.png";
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  return (
    <header>
      <div className='sticky__area'>
        <div className="container-fluid d-flex align-items-center nav__top">
          <div className=" left__area ">
          <a className="brand__area" href="/">
                  <Image
                  src={brandLogo}
                  alt="brand logo"
                  width={150}
                  height={40}
                  />
                </a>
          </div>
          <div className=" flex-grow-1">
          <div className='search__area'>
                <form className="search-input grow mx-h-30x-xs">
                  <input
                    type="text"
                    placeholder="Search picnpick"
                    className="mx-h-30x-xs"
                  />{" "}
                  <button
                    aria-label="submit"
                    type="submit"
                    className="flex mx-h-30x-xs"
                  >
                    Search
                  </button>
                </form>
                </div>
          </div>
          <div className=" right__area d-flex justify-content-end"> 
          <div className="dropdown">
            <button className="btn  dropdown-toggle custom-dropdown " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Account <MdKeyboardArrowDown />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <a href="/cart" className="cart-btn flex pos-rel">
              <AiOutlineShoppingCart/>
              <span className="title">Cart</span>
            </a>
          </div>
        </div>
        <div className="bottom__area text__nowrap ">
             <div className='container-fluid d-flex align-items-center justify-content-between menu__area'> 
              <div> 
                 <a href=''> <span>Home</span></a>
                 <a href=''><span>Products</span></a>
                 <a href=''><span>Categories</span></a>
                 <a href=''><span>BrandsHot</span></a>
                 <a href=''><span>Deals</span> </a>
             </div>
             <div>
                <a href=''> <span>Track Order</span>  </a>
             </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;