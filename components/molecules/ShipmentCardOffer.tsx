import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useAppDispatch } from '../../app/hooks'
import { ShipmentCardOfferType } from '../../app/utils'
import { LABEL_BUTTON_CHOOSE, TEXT_DAYS, TITLE_BEST_OPTION, TITLE_NORMAL_OPTION } from '../../app/constants'
import { createNewLabel } from '../../features/label'

const ShipmentCardOffer = ({index, item}:ShipmentCardOfferType ): JSX.Element => {

  const cardStyles = (index: number) => ({
    marginTop: '20px',
    marginRight: '10px',
    padding: 1,
    background: index === 0 ? '#b6fff8' : '',
  });

  const dispatch = useAppDispatch();

  
  const handleSelectionButton = () => {
    dispatch(createNewLabel({
      rateId: parseInt(item.id),
      labelFormat: 'pdf'
    }));
  }

  return (
    <Card sx={cardStyles(index)} key={item.id}>
      <CardContent>
        { index === 0 && 
          <Typography sx={{ fontSize: 14, color: 'green'}} gutterBottom>
            {TITLE_BEST_OPTION}
          </Typography> || 
          <Typography>
            {TITLE_NORMAL_OPTION}
          </Typography>
        }
        <Typography variant="h5" component="div">
          $ {parseFloat(item.amount).toFixed(2)}
        </Typography>
        <Typography>
          {item.provider}
        </Typography>
        <Typography>
          {TEXT_DAYS} {item.days}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small" variant="outlined" onClick={() => handleSelectionButton()}>{LABEL_BUTTON_CHOOSE}</Button>
      </CardActions>
    </Card>
  )
}

export default ShipmentCardOffer
