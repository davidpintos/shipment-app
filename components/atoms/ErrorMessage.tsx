import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { TEXT_ERROR_MESSAGE } from '../../app/constants'

const ErrorMessage = ({title, errorMessage}:{title:string, errorMessage: any}): JSX.Element => {
 

  return (
  <Alert severity="error" sx={{marginTop: 1}}>
    <AlertTitle>{title}</AlertTitle>
    <b>{TEXT_ERROR_MESSAGE}</b> {JSON.stringify(errorMessage)}
  </Alert>
  )
}
ErrorMessage.defaultProps = {
  title: 'Error',
  errorMessage: ''
}

export default ErrorMessage
