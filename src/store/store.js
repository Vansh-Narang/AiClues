import { configureStore } from '@reduxjs/toolkit'

// Reducer function to update state
const authReducer = (state = { token: null }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, token: action.payload };
        case 'LOGOUT':
            return { ...state, token: null };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: authReducer
});

export default store;
