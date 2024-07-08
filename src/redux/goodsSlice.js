import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../const';

export const fetchGoods = createAsyncThunk('goods/fetchGoods', 
  async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/products?${queryString}`);
    return await response.json();
  }
)

const initialState = {
  items: [],
  status: 'idle',
  ettor: null,
  type: 'bouquets'
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    changeTypeGoods(state, actions) {
      console.log(actions.payload);
      state.type = actions.payload;
      state.status = 'idle'
    }
  },
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

export const { changeTypeGoods } = goodsSlice.actions

export default goodsSlice.reducer