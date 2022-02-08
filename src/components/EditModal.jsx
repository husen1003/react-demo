import React, { useEffect, useState } from 'react';
import Modal from 'antd/es/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/users';
import { notification } from 'antd';
const EditModal = ({ isEdit, setIsEdit }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [data, setData] = useState();
    const handleSubmit = () => {
        let newUsers = [];
        users.map((user, id) => {
            if (user.id === isEdit.id) {
                newUsers.push(data);
            } else {
                newUsers.push(user);
            }
        });
        notification['success']({ message: 'User updated successfully!' });
        dispatch(setUsers(newUsers));
        setIsEdit(false);
    };
    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    useEffect(() => {
        setData(isEdit);
    }, [isEdit]);
    return (
        <div>
            <Modal
                visible={isEdit}
                onCancel={() => setIsEdit(false)}
                onOk={handleSubmit}
                okText={'Update'}
            >
                <div>
                    <div className='mb-2'>
                        <img
                            src={isEdit.avatar}
                            className='w-16 mx-auto rounded-full'
                        />
                    </div>
                    <form>
                        <div className='flex flex-col mb-5'>
                            <label className='mb-2 text-sm'>First name</label>
                            <input
                                className='border p-2 text-base rounded-md shadow-md'
                                name='first_name'
                                value={data?.first_name || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='mb-2 text-sm'>Last name</label>
                            <input
                                className='border p-2 text-base rounded-md shadow-md'
                                name='last_name'
                                value={data?.last_name || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='mb-2 text-sm'>Email</label>
                            <input
                                className='border p-2 text-base rounded-md shadow-md'
                                name='email'
                                value={data?.email || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default EditModal;
