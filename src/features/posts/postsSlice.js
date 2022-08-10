import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post', content: 'Hello' },
  { id: '2', title: 'Second Post', content: 'Hello' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    postUpdated: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id)
      state[index] = action.payload
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
