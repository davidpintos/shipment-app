import React from 'react'
import Grid from '@mui/material/Grid'
import ShipmentField from '../atoms/ShipmentField'
import { ShipmentGridFormTypes } from '../../app/utils'

const ShipmentGridForm = ({isFullWidth, isRequired, onChange, placeholder, size, value}: ShipmentGridFormTypes): JSX.Element => 
    <Grid item xs={size}>
      <ShipmentField isFullWidth={isFullWidth} isRequired={isRequired} placeholder={placeholder} value={value} onChange={onChange} />
    </Grid>

ShipmentGridForm.defaultProps = {
  isFullWidth: false,
  isRequired: false,
  onChange: null,
  size: 6,
  placeholder: '',
  value: ''
}

export default ShipmentGridForm