import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const Api_key = 'f9e7cbbfb886190c83c2a1dd7b9e7fa4';
const Base_url = 'https://api.themoviedb.org/3';


export const getToprate = createAsyncThunk('movie/getMovie', async (dispatch) => {
    let respon = await fetch(`${Base_url}/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});
export const getUpcoming = createAsyncThunk('upcoming/getUpcoming', async (dispatch) => {
    let respon = await fetch(`${Base_url}/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});
export const getSimilarMovie = createAsyncThunk('similar/getSimilar', async (dispatch) => {
    let respon = await fetch(`${Base_url}/movie/${dispatch}/similar?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});
export const getSeach = createAsyncThunk('getSeach', async (dispatch) => {
    let respon = await fetch(`${Base_url}/search/movie?api_key=${Api_key}&query=${dispatch}&type=less`);
    let json = respon.json();
    return json;
});
export const getApibyslug = createAsyncThunk('getApibyslug', async (dispatch) => {
    let respon = await fetch(`${Base_url}/movie/${dispatch}?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});
export const getVideoById = createAsyncThunk('getVideoById', async (dispatch) => {
    let respon = await fetch(`${Base_url}/movie/${dispatch}/videos?api_key=${Api_key}&language=en-US`);
    let json = respon.json();
    return json;
});

export const getDetail = createAsyncThunk('getbyid', async (id) => {
    let respon = await fetch(`${Base_url}/movie/${id}?api_key=${Api_key}&language=en-US`);
    let json = respon.json();
    return json;
});
export const getPopular = createAsyncThunk('popular', async () => {
    let respon = await fetch(`${Base_url}/movie/popular?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});

export const getMovie = createAsyncThunk('movie', async () => {
    let respon = await fetch(`${Base_url}/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`);
    let json = respon.json();
    return json;
});
export const login = createAsyncThunk('login', (vls) => {
    return vls;
});

const getMovieSlice = createSlice({
    name: 'Movie',
    initialState: {
        todos: {
            upcoming: null,
            toprate: null,
            popular: null,
            byid: null,
            byslug: null,
            video: null,
            seach: null,
            similar: null,
        },
        loading: false,
        dataus: null,
    },
    reducers: {},

    extraReducers: {
        [getUpcoming.pending]: (state, action) => {
            state.loading = true;
        },
        [getUpcoming.fulfilled]: (state, action) => {
            state.todos.upcoming = action.payload;
            state.loading = false;
        },
        [getToprate.pending]: (state, action) => {
            state.loading = true;
        },
        [getToprate.fulfilled]: (state, action) => {
            state.todos.toprate = action.payload;
            state.loading = false;
        },
        [getPopular.pending]: (state, action) => {
            state.loading = true;
        },

        [getPopular.fulfilled]: (state, action) => {
            state.todos.popular = action.payload;
            state.loading = false;
        },
        [getDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getDetail.fulfilled]: (state, action) => {
            state.todos.byid = action.payload;
            state.loading = false;
        },
        [getApibyslug.pending]: (state, action) => {
            state.loading = true;
        },
        [getApibyslug.fulfilled]: (state, action) => {
            state.todos.byslug = action.payload;
            state.loading = false;
        },
        [getVideoById.pending]: (state, action) => {
            state.loading = true;
        },
        [getVideoById.fulfilled]: (state, action) => {
            state.todos.video = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.data = action.payload;
        },
        [getSeach.fulfilled]: (state, action) => {
            state.todos.seach = action.payload;
        },
        [getSimilarMovie.fulfilled]: (state, action) => {
            state.todos.similar = action.payload;
        },
        [getSimilarMovie.pending]: (state, action) => {
            state.loading = true;
        },
    },
});

export default getMovieSlice.reducer;
