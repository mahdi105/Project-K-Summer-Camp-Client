import React, { useEffect, useState } from 'react';
import Container from '../Container';
import SectionHeading from '../SectionHeading/SectionHeading';
import ClassCard from '../ClassCard/ClassCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    const storedTheme = localStorage.getItem('theme');
    useEffect(()=>{
        fetch('/Classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <section className={`py-16 ${storedTheme == 'dark'? 'bg-gray-500': 'bg-slate-50'}`}>
            <Container>
                <SectionHeading heading='Popular Classes'></SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        classes.map(course => <ClassCard key={course.id} course={course}></ClassCard> )
                    }
                </div>
            </Container>
        </section>
    );
};

export default PopularClasses;