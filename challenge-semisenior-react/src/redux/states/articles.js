import { LocalStorageTypes } from "../../models/localstorage";
import {getLocalStorage, setLocalStorage} from "../../utilities";
import {createSlice} from '@reduxjs/toolkit';

const initialState = []

export const articlesSlice = createSlice ({
    name: 'articles',
    initialState: getLocalStorage(LocalStorageTypes.ARTICLES)? JSON.parse(localStorage.getItem(LocalStorageTypes.ARTICLES)): initialState,
    reducers: {
        addArticles: (state, action) => {
            setLocalStorage(LocalStorageTypes.ARTICLES, action.payload);
            return action.payload;
        }
    }
});

export const { addArticles} = articlesSlice.actions;
export default articlesSlice.reducer;