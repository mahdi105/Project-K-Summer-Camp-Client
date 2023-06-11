import React, { useEffect, useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Container from '../Container';
import InstructorRaw from '../InstructorRaw';

const PopularInstruct = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <section className='py-16'>
            <Container>
                <SectionHeading heading='Popular Instructors'></SectionHeading>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Instructor</th>
                                    <th>Name & Email</th>
                                    <th>Class Info</th>
                                    <th>View Classes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    instructors.slice(0,6).map(instr => <InstructorRaw key={instr._id} instructor={instr}></InstructorRaw>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PopularInstruct;