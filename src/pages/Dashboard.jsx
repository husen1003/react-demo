import React, { useEffect, useState } from 'react';
import LayOut from '../components/LayOut';
import { Image, Table, Spin, Popconfirm, notification } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditModal from '../components/EditModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/users';
const Dashboard = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    // const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [page, setPage] = useState(1);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (data, record, index) => (
                <span key={index}>{(page - 1) * 10 + index +1}</span>
            ),
        },
        {
            title: 'Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (imageUrl, record, index) => (
                <Image
                    key={index}
                    src={imageUrl}
                    className='w-10 sm:w-20 lg:w-30'
                />
            ),
        },
        {
            title: 'Full name',
            dataIndex: 'name',
            key: 'name',
            render: (data, record, index) => (
                <div
                    key={index}
                >{`${record.first_name} ${record.last_name}`}</div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            responsive: ['sm'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (data, record, index) => (
                <div key={index} className='flex flex-col sm:flex-row'>
                    <Link
                        key={1}
                        to={'#'}
                        className='mr-2'
                        onClick={(e) => {
                            e.preventDefault();
                            setIsEdit(record);
                        }}
                    >
                        Edit
                    </Link>
                    <Popconfirm
                        key={2}
                        title='Are you sure to delete this user?'
                        onConfirm={() => {
                            dispatch(
                                setUsers(
                                    users.filter(
                                        (user) => user.id !== record.id
                                    )
                                )
                            );
                            notification.destroy();
                            notification['warning']({
                                message: 'User Deleted!',
                            });
                        }}
                        okText='Yes'
                        cancelText='No'
                    >
                        <Link to={'#'}>Delete</Link>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const getUsers = async () => {
        setLoading(true);
        try {
            const userlist1 = await axios.get('https://reqres.in/api/users');
            const userlist2 = await axios.get(
                'https://reqres.in/api/users?page=2'
            );
            let userlist = [...userlist1?.data.data, ...userlist2?.data.data];
            dispatch(setUsers(userlist || []));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <LayOut>
            <EditModal
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                users={users}
                setUsers={(users) => dispatch(setUsers(users))}
            />
            <Spin spinning={loading}>
                <div className='w-full sm:w-11/12 mx-auto'>
                    <Table columns={columns} dataSource={users} rowKey='id'
    pagination={{
      onChange(current) {
        setPage(current);
      }
    }} />
                </div>
            </Spin>
        </LayOut>
    );
};

export default Dashboard;
