import { createReducer } from '@reduxjs/toolkit';
import { ShipmentStateType } from '../../app/utils';
import { createNewShipment } from './actions';

const initialState: ShipmentStateType = {
  data: {},
  pending: false,
  error: false,
  errorMessage: ''
};

export const shipmentsReducer = createReducer(initialState, builder => {
  builder
    .addCase(createNewShipment.pending, state => {
      state.pending = true;
    })
    .addCase(createNewShipment.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.error = false;
      state.errorMessage = '';
      state.data = payload;
    })
    .addCase(createNewShipment.rejected, (state, action: any) => {
      state.pending = false;
      state.error = true;
      if (action.payload.response.data.errors) {
        state.errorMessage = action.payload.response.data.errors;
      } else {
        state.errorMessage = action.payload.response.data;
      }
    });
});

export default shipmentsReducer;
