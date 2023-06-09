import React from 'react';

const InstructorRaw = ({ instructor }) => {
    const { id, image, name, email, classes, classesName } = instructor;
    return (
        <>
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>
                    Name: {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">Email: {email}</span>
                </td>
                <td>
                    <p>Total Classes: {classes}</p>
                    <p>Classes Name: {classesName.map((item, i) => <span key={i}>{item}</span>)}</p>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">See Classes</button>
                </th>
            </tr>
        </>
    );
};

export default InstructorRaw;