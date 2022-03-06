import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_SHIPMENTS_URL, DISTANCE_UNIT, MASS_UNIT, SHIPMENT_CREATE_BODY_TEMPLATE } from '../../app/constants'
import { ShipmentDataType } from '../../app/utils'

export const createNewShipment = createAsyncThunk('shipments/createShipment', async ({
  addressFrom,
  addressTo,
  height,
  length,
  weight,
  width
}: ShipmentDataType,  { rejectWithValue }) => {
  let body = SHIPMENT_CREATE_BODY_TEMPLATE;
  body.address_from.zip = addressFrom;
  body.address_to.zip = addressTo;
  body.parcels = [
    {
      height,
      length,
      weight,
      width,
      distance_unit: DISTANCE_UNIT,
      mass_unit: MASS_UNIT
    }
  ];

  try {
    const response = await axios({
      method: 'POST',
      url: API_SHIPMENTS_URL,
      headers: {
        'Authorization': `Token ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      data: body
    });

    return response.data;
  } catch(err) {
    return rejectWithValue(err);
  }
});
