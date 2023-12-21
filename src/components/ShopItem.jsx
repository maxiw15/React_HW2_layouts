import React from 'react';

const ShopItem = ({name, price, color, img}) => {
    return (
        <div className="flex flex-row justify-around items-center bg-[#f6f6f6] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-full max-h-[6rem] mx-12 my-2 p-2">
            <img className="max-h-[6rem] max-w-1/5" src={img} alt={name}/>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-1/5">{name.toUpperCase()}</h1>
            <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400max-w-1/5">{color}</h4>
            <p className="px-2 m-2 text-3xl font-medium text-center text-red-600 rounded-lg max-w-1/5">
                {"$"+ price}
            </p>
            <a href="#"
               className="self-center px-3 py-1.5 m-2 text-sm font-medium text-center text-red-600 bg-white rounded-3xl border border-red-600 max-w-1/5"
            >
                ADD TO CART
            </a>
        </div>
    );
};

export default ShopItem;
