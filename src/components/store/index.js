import { configureStore } from '@reduxjs/toolkit';
import getMovieSlice from './todoSlice';

const store = configureStore({
    reducer: {
        movie: getMovieSlice,
    },
});

export default store;
