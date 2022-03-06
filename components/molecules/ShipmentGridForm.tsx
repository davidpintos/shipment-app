import React from 'react'
import Grid from '@mui/material/Grid'
import ShipmentField from '../atoms/ShipmentField'
import { ShipmentGridFormTypes } from '../../app/utils'

const ShipmentGridForm = ({isFullWidth, isRequired, name, onChange, placeholder, size, value}: ShipmentGridFormTypes): JSX.Element => 
    <Grid item xs={size}>
      <ShipmentField name={name} isFullWidth={isFullWidth} isRequired={isRequired} placeholder={placeholder} value={value} onChange={onChange} />
    </Grid>

ShipmentGridForm.defaultProps = {
  isFullWidth: false,
  isRequired: false,
  name: '',
  onChange: null,
  size: 6,
  placeholder: '',
  value: ''
}

export default ShipmentGridForm