export type LabelType = {
  rateId: number,
  labelFormat?: string
}
export type LabelStateType = {
  data: {},
  pending: boolean,
  error: boolean,
  errorMessage: any
};
export type LabelResponseType = {
  data: {
    data?: {
      attributes: {
        label_url: string
      },
    },
  },
  pending: boolean,
  error: boolean,
  errorMessage?: any
}
export type ShipmentCardOfferType = {
  index: number,
  item: Rate
}
export type ShipmentDataType = {
  addressFrom: string,
  addressTo: string,
  height: number,
  length: number,
  weight: number,
  width: number
}
export type ShipmentFieldTypes = {
  isFullWidth: boolean,
  isRequired: boolean,
  onChange: React.ChangeEventHandler,
  placeholder: string,
  value: string | number
}
export type ShipmentGridFormTypes = {
  isFullWidth: boolean,
  isRequired: boolean,
  onChange: React.ChangeEventHandler,
  placeholder: string,
  size: number,
  value: string | number
}
export type ShipmentResponse = {
  data: {
    data?: [],
    included?: []
  },
  pending: boolean,
  error: boolean,
  errorMessage?: any
}
export type ShipmentSimpleResponse = {
  included?: []
}
export type ShipmentStateType = {
  data: {},
  pending: boolean,
  error: boolean,
  errorMessage: any
};
export type Rate = {
  id: string,
  amount: string,
  provider: string,
  days: number
}

export const numberValidation = (value: number):number => isNaN(value) ? 0 : value;

export const getBestShipmentOptions = (response: ShipmentSimpleResponse):Rate[] | undefined => {
  // Filtering and sorting results by best price!
  const rates: Rate[] | undefined = response.included?.filter((item: any) => item.type === 'rates').map((item: any): Rate => ({
        id: item.id,
        amount: item.attributes.total_pricing,
        provider: item.attributes.provider,
        days: item.attributes.days
  })).sort((a: any, b: any) => a.amount - b.amount || a.days - b.days);
  
  return rates;
}
