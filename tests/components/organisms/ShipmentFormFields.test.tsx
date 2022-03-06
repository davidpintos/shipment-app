/**
 * @jest-environment jsdom
 */

 import ShipmentFormFields from '@components/organisms/ShipmentFormFields'
 import userEvent from '@testing-library/user-event'
 import { renderWithStore } from '../../render-with-store'
 
 describe('ShipmentFormFields component', () => {
    let initialState = {
        shipments: {
            pending: false,
        }
    };
 
    it('Checks all fields exists in the Form', () => {
        const componentUi = renderWithStore(<ShipmentFormFields />, initialState);

        expect(componentUi.getByTestId('field-addressFrom')).toBeInTheDocument();
        expect(componentUi.getByTestId('field-addressTo')).toBeInTheDocument();
        expect(componentUi.getByTestId('field-height')).toBeInTheDocument();
        expect(componentUi.getByTestId('field-length')).toBeInTheDocument();
        expect(componentUi.getByTestId('field-width')).toBeInTheDocument();
        expect(componentUi.getByTestId('field-weight')).toBeInTheDocument();
    });

    it('Checks all fields values are correct', () => {
        const componentUi = renderWithStore(<ShipmentFormFields />, initialState);

        expect(componentUi.getByTestId('field-addressFrom')).toHaveValue('');
        expect(componentUi.getByTestId('field-addressTo')).toHaveValue('');
        expect(componentUi.getByTestId('field-height')).toHaveValue('0');
        expect(componentUi.getByTestId('field-length')).toHaveValue('0');
        expect(componentUi.getByTestId('field-width')).toHaveValue('0');
        expect(componentUi.getByTestId('field-weight')).toHaveValue('0');
    });

    it('Checks all fields values are correct after changing them', () => {
        const componentUi = renderWithStore(<ShipmentFormFields />, initialState);

        const addressFrom = componentUi.getByTestId('field-addressFrom');
        const addressTo = componentUi.getByTestId('field-addressTo');
        const height = componentUi.getByTestId('field-height');
        const length = componentUi.getByTestId('field-length');
        const width = componentUi.getByTestId('field-width');
        const weight = componentUi.getByTestId('field-weight');

        userEvent.type(addressFrom, '4000');
        userEvent.type(addressTo, '2000');
        userEvent.type(height, '10');
        userEvent.type(length, '10');
        userEvent.type(width, '10');
        userEvent.type(weight, '3');

        expect(addressFrom).toHaveValue('4000');
        expect(addressTo).toHaveValue('2000');
        expect(height).toHaveValue('10');
        expect(length).toHaveValue('10');
        expect(width).toHaveValue('10');
        expect(weight).toHaveValue('3');
    });

    it('Checks Quote Button is present and enabled', () => {
        const componentUi = renderWithStore(<ShipmentFormFields />, initialState);
        
        expect(componentUi.getByTestId('quoteButton')).toBeInTheDocument();
        expect(componentUi.getByTestId('quoteButton')).toBeEnabled();
    });

    it('Checks Quote Button is present and disabled', () => {
        initialState.shipments.pending = true;
        const componentUi = renderWithStore(<ShipmentFormFields />, initialState);
        
        expect(componentUi.getByTestId('quoteButton')).toBeInTheDocument();
        expect(componentUi.getByTestId('quoteButton')).toBeDisabled();
    });
 });
 