import {configureStore} from '@reduxjs/toolkit'
import shortlistReducer from '../features/shortlist/shortlistSlice';

export default configureStore({
    reducer: {
        shortlist: shortlistReducer
    }
})