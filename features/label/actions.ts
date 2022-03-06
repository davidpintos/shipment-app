import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_LABELS_URL } from '../../app/constants'
import { LabelType } from '../../app/utils'

export const resetState = createAction('labels/resetState');
export const createNewLabel = createAsyncThunk('labels/createLabel', async ({
  rateId,
  labelFormat = 'pdf'
}: LabelType, { rejectWithValue }) => {
  try {

    const response = await axios({
      method: 'POST',
      url: API_LABELS_URL,
      headers:{
        'Authorization': `Token ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      data: {
        rate_id: rateId,
        label_format: labelFormat
      }
    });

    return response.data;
  } catch(err) {
    return rejectWithValue(err);
  }
});
