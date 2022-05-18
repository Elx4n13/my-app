import { configureStore} from '@reduxjs/toolkit';
import filmReducer from '../reducer/filmSlice';

export const store= configureStore({

    reducer: {
        films: filmReducer
    }

})  