import React from 'react';

const InstrCard = ({instructor}) => {
    const {image, name, email, classes, classesName} = instructor;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-[200px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <div className="card-actions">
                   <p>Classes: {classes}</p>
                   <p className='mb-2'>ClassesName: {
                    classesName.map((Name, i) =><span key={i}>{Name}</span> )
                    }</p>
                    <button className='btn btn-primary btn-sm'>See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstrCard;