import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface FavItem {
    id: string | number
    [key: string]: any
}

interface FavState {
    fav: FavItem[]
    cats: FavItem[]
}

const initialState: FavState = {
    fav: [],
    cats: [],
}

export const addToFav = createAsyncThunk(
    'fav/addToFav',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(
                'https://api.thecatapi.com/v1/favourites',
                {
                    headers: {
                        'x-api-key':
                            'live_7GW8eL27XjWOdyDaVC7w8GYpNnQQt9M98Q9F49m96PKThnThZlShYbO3ue5CJYoI',
                    },
                    body: payload,
                }
            )
            return res.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addItemToFav: (state, action: PayloadAction<FavItem>) => {
            state.fav.push(action.payload)
        },
        removeItemFromFav: (state, action: PayloadAction<{ id: any }>) => {
            state.fav = state.fav.filter(
                (item) => item.id !== action.payload.id
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addToFav.fulfilled, (state, action) => {
            state.cats = action.payload
        })
    },
})

export const { addItemToFav, removeItemFromFav } = favSlice.actions

export default favSlice.reducer
