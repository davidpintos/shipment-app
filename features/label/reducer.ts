import { createReducer } from '@reduxjs/toolkit';
import { LabelStateType } from '../../app/utils';
import { createNewLabel, resetState } from './actions';

const initialState: LabelStateType = {
  data: {},
  pending: false,
  error: false,
  errorMessage: ''
};

export const labelsReducer = createReducer(initialState, builder => {
  builder
    .addCase(resetState, state => {
      state.data = initialState.data;
      state.pending = initialState.pending;
      state.error = initialState.error;
      state.errorMessage = initialState.errorMessage;
    })
    .addCase(createNewLabel.pending, state => {
      state.pending = true;
    })
    .addCase(createNewLabel.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.error = false;
      state.data = payload;
    })
    .addCase(createNewLabel.rejected, (state, action: any) => {
      state.pending = false;
      state.error = true;
      if (action.payload.response.data.errors) {
        state.errorMessage = action.payload.response.data.errors;
      } else {
        state.errorMessage = action.payload.response.data;
      }
    });
});

export default labelsReducer;
