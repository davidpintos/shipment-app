import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { labelsReducer } from '../features/label';
import { shipmentsReducer } from '../features/shipment'

export const store = configureStore({
  reducer: {
    labels: labelsReducer,
    shipments: shipmentsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
