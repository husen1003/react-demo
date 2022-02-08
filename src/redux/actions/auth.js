import { createAction } from '@reduxjs/toolkit';

const login = createAction('login');
const logOut = createAction('logOut');

export { login, logOut };
