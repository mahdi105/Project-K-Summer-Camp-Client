import React, { useEffect } from 'react';
import Container from '../../components/Utils/Container';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import InstrCard from '../../components/Utils/InstrCard/InstrCard';

const Instructors = () => {
    const {data,isLoading} = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const data = await axios.get('http://localhost:5000/instructors');
            return data;
        },
    })
    const instructors = !isLoading && data.data;
    return (
        <section className='mt-[75px]'>
            <Container>
                <div className='pt-8'>
                    <SectionHeading heading='All Instructors At Summer Sports'></SectionHeading>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 pt-5 pb-20'>
                        {
                            instructors && instructors.map(instructor => <InstrCard key={instructor._id} instructor={instructor}></InstrCard>)
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Instructors;