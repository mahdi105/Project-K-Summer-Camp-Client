import React from 'react';
import Container from '../../components/Utils/Container';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';

const Classes = () => {
    return (
        <section>
            <Container>
                <div className='pb-8'>
                    <SectionHeading heading='All Classes'></SectionHeading>
                </div>
            </Container>
        </section>
    );
};

export default Classes;