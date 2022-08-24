import {createSlice} from '@reduxjs/toolkit';

export const shortlistSlice = createSlice({
    name: "shortlist",
    initialState: {
        isLoggedIn: false,
        user: {},
        showShortlistForm: false
    },
    reducers: {
        toggleIsLoggedIn: (state, action) =>{
            state.isLoggedIn = action.payload;
        },
        setUser: (state, action) =>{
            state.user = action.payload;
        },
        setShowShortlistForm: (state, action) =>{
            state.showShortlistForm = action.payload
        }
    }
})
export const { toggleIsLoggedIn, setUser, setShowShortlistForm } = shortlistSlice.actions;
export default shortlistSlice.reducer;