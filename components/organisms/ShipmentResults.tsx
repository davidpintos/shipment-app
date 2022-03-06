
import React from 'react'
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid'
import { useAppSelector } from '../../app/hooks'
import { labelsSelector } from '../../features/label'
import { shipmentsSelector } from '../../features/shipment'
import { getBestShipmentOptions, LabelResponseType, Rate, ShipmentResponse } from '../../app/utils'
import ErrorMessage from '../atoms/ErrorMessage'
import ShipmentCardOffer from '../molecules/ShipmentCardOffer'
import { TEXT_GUIDE_ERROR_MESSAGE_TITLE, TEXT_SEARCH_ERROR_MESSAGE_TITLE, TEXT_SEARCHING_BEST_OPTIONS } from '../../app/constants'

const ShipmentResults = (): JSX.Element => {
  const response: ShipmentResponse = useAppSelector(shipmentsSelector);
  const labelResponse: LabelResponseType = useAppSelector(labelsSelector);

  let rates: Rate[] | undefined;

  if (response) {
    rates = getBestShipmentOptions({included: response.data.included});
  }

  if (!labelResponse.pending && 
      !labelResponse.error &&
      labelResponse.data.data) {
      // Navigate to Guide
      const router = useRouter();
      router.push(labelResponse.data.data?.attributes.label_url);
  }

  return (
    <>
      {!labelResponse.pending && labelResponse.error && <ErrorMessage errorMessage={labelResponse.errorMessage} title={TEXT_GUIDE_ERROR_MESSAGE_TITLE} />}
      {!response.pending && response.error && <ErrorMessage errorMessage={response.errorMessage} title={TEXT_SEARCH_ERROR_MESSAGE_TITLE} />}
      {labelResponse.pending && <p>Un momento, estamos generando su Guìa...</p>}
      <Grid container>
        {response.pending && <p>{TEXT_SEARCHING_BEST_OPTIONS}</p>}
        {
          !response.pending && !response.error &&
          response.data && rates?.map((item, index) => <ShipmentCardOffer key={`card-${index}`} item={item} index={index} />)
        }
      </Grid>
    </>
  )
        
}

export default ShipmentResults
