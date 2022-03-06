import { RootState } from "../../app/store";
import { createSelector } from '@reduxjs/toolkit';

export const selectLabels = (state: RootState) => state.labels

export const labelsSelector = createSelector(
  selectLabels,
  state => state
)
