import React from 'react';
import LayOut from '../components/LayOut';

const Login = () => {
    return (
        <LayOut>
            <div className='w-12/12 sm:w-10/12 md:w-6/12 mt-20 border shadow-lg rounded-lg py-10 mx-1 sm:mx-auto'>
                <form className='mx-2 p-0 sm:px-5'>
                    <div className='flex flex-col mb-5'>
                        <label className='mb-2 text-sm'>Email</label>
                        <input
                            type='email'
                            className='border outline-none p-2 text-base rounded-md shadow-md'
                            name='first_name'
                            placeholder='Enter email...'
                        />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='mb-2 text-sm'>Password</label>
                        <input
                            type='password'
                            className='border outline-none p-2 text-base rounded-md shadow-md'
                            name='email'
                            placeholder='Enter password'
                        />
                    </div>
                </form>
            </div>
        </LayOut>
    );
};

export default Login;
