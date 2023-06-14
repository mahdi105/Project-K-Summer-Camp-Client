import React from 'react';

const UserManageRaw = ({item, handleAdmin, handleInstructor}) => {
    const {_id, name, email, image, role} = item;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image ? image : ''} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>Email: {email}</p>
            </td>
            <th>
                <div className='flex items-center gap-2'>
                    <button disabled={role && role === 'admin'} onClick={()=>handleAdmin(_id)} className="btn btn-success btn-xs">Make Admin</button>
                    <button disabled={role && role === 'instructor'} onClick={()=>handleInstructor(_id)} className="btn btn-primary btn-xs">Make Instructor</button>
                </div>
            </th>
        </tr>
    );
};

export default UserManageRaw;