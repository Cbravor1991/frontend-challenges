import {configureStore} from '@reduxjs/toolkit'
import {articleSlice} from './states/articles'

const store = configureStore ({
    reducer: {
        articles: articleSlice.re4
    }
})