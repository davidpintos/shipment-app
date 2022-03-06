import { RootState } from "../../app/store";
import { createSelector } from '@reduxjs/toolkit';

export const selectShipments = (state: RootState) => state.shipments

export const shipmentsSelector = createSelector(
  selectShipments,
  state => state
)
