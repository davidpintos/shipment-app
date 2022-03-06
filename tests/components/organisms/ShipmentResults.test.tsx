/**
 * @jest-environment jsdom
 */

import ShipmentResults from '@components/organisms/ShipmentResults'
import { renderWithStore } from '../../render-with-store'

type ShipmentResultInitialStateType = {
  labels: {
    data: {},
    pending: boolean,
    error: boolean,
    errorMessage: string
  },
  shipments: {
    data: {
      included: any[]
    },
    pending: boolean,
    error: boolean,
    errorMessage: string
  },
}

describe('ShipmentResults component', () => {
  let initialState: ShipmentResultInitialStateType = {
    labels: {
      data: {},
      pending: false,
      error: false,
      errorMessage: ''
    },
    shipments: {
      data: {
        included: []
      },
      pending: false,
      error: false,
      errorMessage: ''
    },
  };

  beforeEach(() => {
    initialState.labels.pending = false;
    initialState.labels.error = false;
    initialState.shipments.pending = false;
    initialState.shipments.error = false;
  });

  it('Checks all components initial status is ok', () => {
    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.getByTestId('mainGrid')).toBeInTheDocument();
    expect(componentUi.queryByTestId('generatingGuide')).toBeNull();
    expect(componentUi.queryByTestId('searchingOptions')).toBeNull();
  });

  it('Checks all components initial status is ok, guide text is visible', () => {
    initialState.labels.pending = true;
    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.getByTestId('mainGrid')).toBeInTheDocument();
    expect(componentUi.queryByTestId('generatingGuide')).toBeInTheDocument();
    expect(componentUi.queryByTestId('searchingOptions')).toBeNull();
  });

  it('Checks all components initial status is ok, searching text is visible', () => {
    initialState.shipments.pending = true;
    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.getByTestId('mainGrid')).toBeInTheDocument();
    expect(componentUi.queryByTestId('generatingGuide')).toBeNull();
    expect(componentUi.queryByTestId('searchingOptions')).toBeInTheDocument();
  });

  it('Checks all components initial status is ok, searching error message is visible', () => {
    initialState.shipments.error = true;
    initialState.shipments.errorMessage = 'Searching error';
    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.getByTestId('mainGrid')).toBeInTheDocument();
    expect(componentUi.queryByRole('alert')).toBeInTheDocument();
    expect(componentUi.queryByText(/Searching error/)).toBeInTheDocument();
    expect(componentUi.queryByTestId('generatingGuide')).toBeNull();
    expect(componentUi.queryByTestId('searchingOptions')).toBeNull();
  });

  it('Checks all components initial status is ok, guide error message is visible', () => {
    initialState.labels.error = true;
    initialState.labels.errorMessage = 'Guide error';
    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.getByTestId('mainGrid')).toBeInTheDocument();
    expect(componentUi.queryByRole('alert')).toBeInTheDocument();
    expect(componentUi.queryByText(/Guide error/)).toBeInTheDocument();
    expect(componentUi.queryByTestId('generatingGuide')).toBeNull();
    expect(componentUi.queryByTestId('searchingOptions')).toBeNull();
  });

  it('Checks rates results (cards) are rendered', () => {
    initialState.shipments.data.included = [
      {
        'id': '147457',
        'type': 'rates',
        'attributes': {
          'provider': 'CARSSA',
          'days': 10,
          'total_pricing': '134.0'
        }
      },
      {
        'id': '147456',
        'type': 'rates',
        'attributes': {
          'provider': 'DHL',
          'days': 2,
          'total_pricing': '362.0'
        }
      },
      {
        'id': '147455',
        'type': 'rates',
        'attributes': {
          'provider': 'DHL',
          'days': 5,
          'total_pricing': '331.0'
        }
      },
      {
        'id': '147454',
        'type': 'rates',
        'attributes': {
          'provider': 'ESTAFETA',
          'days': 2,
          'total_pricing': '219.0'
        }
      }
    ];

    const componentUi = renderWithStore(<ShipmentResults />, initialState);

    expect(componentUi.queryAllByTestId('cardOffer')).toHaveLength(4);
  });

});
