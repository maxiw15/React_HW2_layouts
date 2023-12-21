import React from 'react';

const ShopCard = ({name, price, color, img}) => {
    return (
        <div className="flex flex-col items-center bg-[#f6f6f6] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/4 m-12 p-2">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name.toUpperCase()}</h1>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">{color}</h4>
            <img className="" src={img} alt={name}/>
            <div className="flex flex-row justify-between w-full items-end">
                <p className="px-2 m-2 text-3xl font-medium text-center text-red-600 rounded-lg">
                    {"$"+ price}
                </p>
                <a href="#"
                   className="self-center px-3 py-1.5 m-2 text-sm font-medium text-center text-red-600 bg-white rounded-3xl border border-red-600"
                >
                    ADD TO CART
                </a>
            </div>
        </div>
    );
};

export default ShopCard;
