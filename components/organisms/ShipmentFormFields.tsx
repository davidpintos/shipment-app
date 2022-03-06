import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { 
  LABEL_BUTTON_QUOTE,
  PLACEHOLDER_CP_SOURCE,
  PLACEHOLDER_CP_TARGET,
  PLACEHOLDER_HEIGHT,
  PLACEHOLDER_LENGTH,
  PLACEHOLDER_WEIGHT,
  PLACEHOLDER_WIDTH
} from '../../app/constants'
import ShipmentGridForm from '../molecules/ShipmentGridForm'
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks'
import { resetState } from '../../features/label'
import {
  createNewShipment,
  shipmentsSelector,
} from '../../features/shipment'
import { numberValidation, ShipmentResponse } from '../../app/utils'

const ShipmentFormFields = (): JSX.Element => {
  
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [weight, setWeight] = useState(0);
  const dispatch = useAppDispatch();
  const response: ShipmentResponse = useAppSelector(shipmentsSelector);

  const handleShipmentButton = () => {
    dispatch(resetState());
    dispatch(createNewShipment({
      addressFrom,
      addressTo,
      length,
      height,
      width,
      weight
    }));
  }
  
  return (
    <Grid container spacing={2} item xs={true}>
      <ShipmentGridForm name="addressFrom" size={6} isFullWidth={true} isRequired={true} value={addressFrom} onChange={(e:any) => setAddressFrom((e.target as HTMLInputElement).value)} placeholder={PLACEHOLDER_CP_SOURCE}/>
      <ShipmentGridForm name="addressTo" size={6} isFullWidth={true} isRequired={true} value={addressTo} onChange={(e:any) => setAddressTo((e.target as HTMLInputElement).value)} placeholder={PLACEHOLDER_CP_TARGET} />
      <ShipmentGridForm name="length" size={3} isFullWidth={true} isRequired={true} value={length} onChange={(e:any) => setLength(numberValidation(parseInt((e.target as HTMLInputElement).value)))} placeholder={PLACEHOLDER_LENGTH} />
      <ShipmentGridForm name="height" size={3} isFullWidth={true} isRequired={true} value={height} onChange={(e:any) => setHeight(numberValidation(parseInt((e.target as HTMLInputElement).value)))} placeholder={PLACEHOLDER_HEIGHT} />
      <ShipmentGridForm name="width" size={3} isFullWidth={true} isRequired={true} value={width} onChange={(e:any) => setWidth(numberValidation(parseInt((e.target as HTMLInputElement).value)))} placeholder={PLACEHOLDER_WIDTH} />
      <ShipmentGridForm name="weight" size={3} isFullWidth={true} isRequired={true} value={weight} onChange={(e:any) => setWeight(numberValidation(parseInt((e.target as HTMLInputElement).value)))} placeholder={PLACEHOLDER_WEIGHT} />
      <Grid item>
        <Button data-testid="quoteButton" onClick={() => handleShipmentButton()} disabled={response.pending} variant="outlined">{LABEL_BUTTON_QUOTE}</Button>
      </Grid>
    </Grid>
  )
  }  

export default ShipmentFormFields
