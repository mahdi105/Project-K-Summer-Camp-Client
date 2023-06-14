import React from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const notify = (str) => toast.success(str);
const FeedbackPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        axiosSecure.patch(`/classFeedback/${id}`, {feedback: feedback})
        .then(res =>{
            if(res.data.modifiedCount){
                notify('Feedback is successfully sent');
                form.reset();
                navigate('/dashboard/manageClasses');
            }
        });
    }
    return (
        <section>
            <SectionHeading heading='Give Your Feedback'></SectionHeading>
            <div className='w-1/2 mx-auto p-8 rounded-lg shadow-lg'>
                <form onSubmit={handleFeedback}>
                    <label className="label">
                        <span className="font-semibold uppercase">Feedback</span>
                    </label>
                    <textarea name='feedback' className="w-full h-[230px] mb-3 textarea textarea-success" placeholder="Write something about the course"></textarea>
                    <button type='submit' className='btn btn-success btn-sm'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default FeedbackPage;