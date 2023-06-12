import React from 'react';
import Container from '../../components/Utils/Container';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from '../../components/Utils/ClassCard/ClassCard';

const Classes = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const data = await axios.get('http://localhost:5000/classes');
            return data
        }
    });
    const classes = !isLoading && data.data ? data.data : [];
    return (
        <section className='mt-[110px]'>
            <Container>
                <div className='pb-4'>
                    <SectionHeading heading='All Classes'></SectionHeading>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-16'>
                    {
                        classes.map(course => <ClassCard key={course._id} course={course}></ClassCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Classes;