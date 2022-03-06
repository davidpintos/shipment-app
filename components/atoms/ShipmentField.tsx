import React from 'react'
import TextField from '@mui/material/TextField'
import { ShipmentFieldTypes } from '../../app/utils'

const ShipmentField = ({isFullWidth, isRequired, onChange, placeholder,  value}: ShipmentFieldTypes): JSX.Element => 
  <TextField fullWidth={isFullWidth} required={isRequired} value={value} onChange={onChange} label={placeholder} variant="outlined" />

ShipmentField.defaultProps = {
  isFullWidth: false,
  isRequired: false,
  onChange: null,
  placeholder: '',
  value: ''
}

export default ShipmentField
