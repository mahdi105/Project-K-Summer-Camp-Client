import React from 'react';
import Container from '../Container';
import SectionHeading from '../SectionHeading/SectionHeading';
import ClassCard from '../ClassCard/ClassCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const PopularClasses = () => {
    const storedTheme = localStorage.getItem('theme');
    const {data, isLoading} = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=> {
            const data = await axios.get('http://localhost:5000/classes');
            return data;
        },
    })
    const classes = !isLoading && data.data ? data.data : [];
    return (
        <section className={`py-16 bg-slate-50`}>
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