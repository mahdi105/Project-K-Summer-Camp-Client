import React from 'react';

const SectionHeading = ({heading}) => {
    const storedTheme = localStorage.getItem('theme');
    return (
        <div className='mb-12'>
            <h2 style={{fontFamily:'Poppins'}} className={`text-center font-bold text-2xl md:text-4xl text-blue-900 mb-3`}>{heading}</h2>
        </div>
    );
};

export default SectionHeading;