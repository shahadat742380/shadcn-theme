import React from 'react';
import Card from './common/card';

const Products = () => {
    return (
        <div className='w-full py-20 bg-gray-200 dark:bg-gray-700'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Products;