import React from 'react';

const Container = ({children}) => {
    return (
        <section className='container mx-auto px-2 md:px-10 lg:px-20'>
            {children}
        </section>
    );
};

export default Container;