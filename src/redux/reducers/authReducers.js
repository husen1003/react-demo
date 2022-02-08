import { createReducer } from '@reduxjs/toolkit';
import { login, logOut } from '../actions/auth';

const initialState = {
    isLogin: false,
    count: 0,
};

const auth = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state) => {
            state.isLogin = true;
        })
        .addCase(logOut, (state) => {
            state.isLogin = false;
        });
});

export default auth;
