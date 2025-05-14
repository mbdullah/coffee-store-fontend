import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetail = () => {
    const detail = useLoaderData();
    console.log(detail);
    const {name, photo, price, supplier, quantity, taste, details} = detail
    return (
        <div className='flex items-center justify-around bg-[#F4F3F0] px-30 py-18 rounded my-10'>
            <div>
                <img src={photo} alt="" />
            </div>

            <div className='text-black'>
                <h3 className='text-3xl mb-8'>Niceties</h3>
                <p><span>Name : </span>{name}</p>
                <p><span>Quantity : </span>{quantity}</p>
                <p><span>Price : </span>{price}</p>
                <p><span>Supplier : </span>{supplier}</p>
                <p><span>Taste : </span>{taste}</p>
                <p><span>Details : </span>{details}</p>
            </div>
        </div>
    );
};

export default CoffeeDetail;