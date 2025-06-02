import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiNews/apiCats'
import favReducer from './slices/favSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        fav: favReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
