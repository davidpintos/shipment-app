export const API_URL = 'https://api-demo.skydropx.com/v1/';
export const API_SHIPMENTS_URL = `${API_URL}/shipments`;
export const API_LABELS_URL = `${API_URL}/labels`;

export const DISTANCE_UNIT = 'CM';

export const LABEL_BUTTON_QUOTE = 'Cotizar Envío';
export const LABEL_BUTTON_CHOOSE = 'Seleccionar';

export const MASS_UNIT = 'KG';

export const PLACEHOLDER_CP_SOURCE = 'Código postal de origen';
export const PLACEHOLDER_CP_TARGET = 'Código postal de destino';
export const PLACEHOLDER_LENGTH = 'Largo (cm)';
export const PLACEHOLDER_HEIGHT = 'Alto (cm)';
export const PLACEHOLDER_WIDTH = 'Ancho (cm)';
export const PLACEHOLDER_WEIGHT = 'Peso (kg)';

export const SHIPMENT_CREATE_BODY_TEMPLATE = 
{
  'address_from': {
      'province': 'Ciudad de México',
      'city': 'Azcapotzalco',
      'name': 'Jose Fernando',
      'zip': '02900',
      'country': 'MX',
      'address1': 'Av. Principal #234',
      'company': 'skydropx',
      'address2': 'Centro',
      'phone': '5555555555',
      'email': 'skydropx@email.com'
  },
  'parcels': [
      {
          'weight': 3,
          'distance_unit': 'CM',
          'mass_unit': 'KG',
          'height': 10,
          'width': 10,
          'length': 10
      }
  ],
  'address_to': {
      'province': 'Jalisco',
      'city': 'Guadalajara',
      'name': 'Jorge Fernández',
      'zip': '44100',
      'country': 'MX',
      'address1': ' Av. Lázaro Cárdenas #234',
      'company': '-',
      'address2': 'Americana',
      'phone': '5555555555',
      'email': 'ejemplo@skydropx.com',
      'reference': 'Frente a tienda de abarro',
      'contents': 'Indumentaria'
  },
  'consignment_note_class_code': '53131600',
  'consignment_note_packaging_code': '1H1'
};

export const TEXT_DAYS = 'Días:';
export const TEXT_SEARCHING_BEST_OPTIONS = 'Buscando las mejores opciones para ti...';
export const TEXT_SORRY = 'Lo sentimos! Hubo un problema, intenta nuevamente.';
export const TEXT_GUIDE_ERROR_MESSAGE_TITLE = 'Hubo un error generando su Guía para la opción deseada (intente escogiendo otra opción si así lo desea)';
export const TEXT_ERROR_MESSAGE = 'Detalles del error:';
export const TEXT_SEARCH_ERROR_MESSAGE_TITLE = 'Hubo un error al buscar las posibles cotizaciones (recuerde que todos los campos son requeridos)';

export const TITLE = 'Cotizador de Paquetería';
export const TITLE_BEST_OPTION = 'MEJOR OPCION!!';
export const TITLE_NORMAL_OPTION = '-------------------';
