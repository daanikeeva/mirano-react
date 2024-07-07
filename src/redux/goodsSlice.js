import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../const';

export const fetchGoods = createAsyncThunk('goods/fetchGoods', 
  async () => {
    const response = await fetch(`${API_URL}/api/products`);
    return await response.json();
  }
)

const initialState = {
  items: [],
  status: 'idle',
  ettor: null,
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;     
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.ettor = action.error.message;
      });
  },
});

export const {} = goodsSlice.actions

export default goodsSlice.reducer