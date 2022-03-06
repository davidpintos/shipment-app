import React from 'react'
import TextField from '@mui/material/TextField'
import { ShipmentFieldTypes } from '../../app/utils'

const ShipmentField = ({isFullWidth, isRequired, name, onChange, placeholder,  value}: ShipmentFieldTypes): JSX.Element => 
  <TextField inputProps={{ 'data-testid': `field-${name}` }} fullWidth={isFullWidth} required={isRequired} value={value} onChange={onChange} label={placeholder} variant="outlined" />

ShipmentField.defaultProps = {
  isFullWidth: false,
  isRequired: false,
  name: '',
  onChange: null,
  placeholder: '',
  value: ''
}

export default ShipmentField
