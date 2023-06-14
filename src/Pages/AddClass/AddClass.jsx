import React, { useState } from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const notify = (str) => toast.success(str);
const AddClass = () => {
    const [Loading, setLoading] = useState(false);
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const image = form.image.files[0];
        const instructorImage = form.instructorImage.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
        const seats = parseInt(form.seats.value);
        const price = parseFloat(form.price.value);
        const status = form.status.value;
        const students = parseInt(form.students.value);
        setLoading(true);

        // Get Class Photo Link
        const formData = new FormData();
        formData.append('image', image);
        const URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_CLASS_IMG_UPLOAD_KEY}`;

        axios.post(URL, formData)
        .then(res => {
            const imageLink = res.data.data.display_url;
            const classInfo = {
                name: name,
                image: imageLink,
                instructorName: instructor ? instructor : '',
                instructorImage: instructorImage,
                email: email,
                availableSeats: seats,
                price: price,
                status: status,
                numberOfStudents: students,
            };
            axiosSecure.post(`/addClass?email=${!loading && user?.email}`, classInfo)
            .then(res => {
                if(res.data.insertedId){
                    setLoading(false);
                    notify("Added Successfully");
                    form.reset();
                }
            })
        })
    }
    return (
        <section className='pb-8'>
            <SectionHeading heading='Add New Class'></SectionHeading>
            <div className='w-8/12 mx-auto p-8 rounded-md shadow-lg border'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
                        <div >
                            <label className="label">
                                <p className='font-semibold'>Class Name</p>
                            </label>
                            <input type="text" name='name' className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Class Image</p>
                            </label>
                            <input type="file" name='image' className="file-input file-input-error file-input-bordered w-full" required/>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
                        <div >
                            <label className="label">
                                <p className='font-semibold'>Instructor Name</p>
                            </label>
                            <input type="text" name='instructor' defaultValue={!loading && user?.displayName} className="input input-bordered w-full" readOnly />
                        </div>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Instructor Image</p>
                            </label>
                            <input type="text" name='instructorImage' defaultValue={!loading && user?.photoURL && user?.photoURL} className="file-input file-input-bordered w-full" readOnly />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <p className='font-semibold'>Instructor Email</p>
                        </label>
                        <input type="email" name='email' defaultValue={!loading && user?.email} className="file-input file-input-bordered w-full" readOnly />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-3'>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Available Seats</p>
                            </label>
                            <input type="text" name='seats' className="file-input file-input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Price</p>
                            </label>
                            <input type="text" name='price' className="file-input file-input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Number Of Students</p>
                            </label>
                            <input type="text" name='students' defaultValue='0' className="file-input file-input-bordered w-full" readOnly />
                        </div>
                        <div>
                            <label className="label">
                                <p className='font-semibold'>Status</p>
                            </label>
                            <input type="text" name='status' defaultValue='pending' className="file-input file-input-bordered w-full" readOnly />
                        </div>
                    </div>
                    <button disabled={Loading} type='submit' className="btn btn-block btn-primary">SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

export default AddClass;