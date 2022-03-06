import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import ShipmentFormFields from '../organisms/ShipmentFormFields'
import ShipmentResults from '../organisms/ShipmentResults'
import { TITLE } from '../../app/constants'

const Main = (): JSX.Element => {
  return (
    <Container maxWidth="lg" >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="div" gutterBottom>
          {TITLE}
        </Typography>
        <ShipmentFormFields />
        <ShipmentResults />
      </Box>
    </Container>
  )
}

export default Main
