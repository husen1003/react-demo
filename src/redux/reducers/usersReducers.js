import { createReducer } from '@reduxjs/toolkit';
import { setUsers } from '../actions/users';

const initialState = {
    users: [],
};

const auth = createReducer(initialState, (builder) => {
    builder.addCase(setUsers, (state, { payload }) => {
        state.users = payload;
    });
});

export default auth;
