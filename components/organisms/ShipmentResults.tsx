
import React from 'react'
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid'
import { useAppSelector } from '../../app/hooks'
import { labelsSelector } from '../../features/label'
import { shipmentsSelector } from '../../features/shipment'
import { getBestShipmentOptions, LabelResponseType, Rate, ShipmentResponse } from '../../app/utils'
import ErrorMessage from '../atoms/ErrorMessage'
import ShipmentCardOffer from '../molecules/ShipmentCardOffer'
import { TEXT_GENERATING_GUIDE, TEXT_GUIDE_ERROR_MESSAGE_TITLE, TEXT_SEARCH_ERROR_MESSAGE_TITLE, TEXT_SEARCHING_BEST_OPTIONS } from '../../app/constants'

const ShipmentResults = (): JSX.Element => {
  const shipmentResponse: ShipmentResponse = useAppSelector(shipmentsSelector);
  const labelResponse: LabelResponseType = useAppSelector(labelsSelector);

  let rates: Rate[] | undefined;

  if (shipmentResponse && shipmentResponse.data) {
    rates = getBestShipmentOptions({included: shipmentResponse.data.included});
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
      {!shipmentResponse.pending && shipmentResponse.error && <ErrorMessage errorMessage={shipmentResponse.errorMessage} title={TEXT_SEARCH_ERROR_MESSAGE_TITLE} />}
      {labelResponse.pending && <p data-testid="generatingGuide">{TEXT_GENERATING_GUIDE}</p>}
      <Grid data-testid="mainGrid" container>
        {shipmentResponse.pending && <p data-testid="searchingOptions">{TEXT_SEARCHING_BEST_OPTIONS}</p>}
        {
          !shipmentResponse.pending && !shipmentResponse.error &&
          shipmentResponse.data && rates?.map((item, index) => <ShipmentCardOffer key={`card-${index}`} item={item} index={index} />)
        }
      </Grid>
    </>
  )
        
}

export default ShipmentResults
