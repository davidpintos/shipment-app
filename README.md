## Shipment App

Esta aplicación fue desarrollada con Next.js (React). Utilizando la API de Skydropx (https://www.skydropx.com/) permite a los usuarios consultar y escoger entre los mejores servicios de envío de paquetería disponibles. 

## Variable de Entorno

Para correr la aplicación en ambiente de DEV y que la misma pueda utilizar la API de Skydropx luego de clonar el proyecto es necesario crear el archivo .env.local en la carpeta principal de la aplicación y setear la API_KEY de Skydropx.
```bash
NEXT_PUBLIC_API_KEY="<API_KEY>"
```
## Instalación
Primero:
```bash
npm install
```

Luego:
```bash
npm run dev
```

Finalmente la aplicación debería estar disponible en [http://localhost:3000](http://localhost:3000).
## Version Live
Hay una versión LIVE de la aplicación en Vercel aquí: https://shipment-app-2psps6b4s-davidpintos.vercel.app/

## Testing
Los tests de la aplicación fueron realizados sobre los componentes principales de la misma, se pueden correr así:

```bash
npm run tests
```
## ESlint

Se puede correr Lint para verificar que el código esté correcto de la siguiente manera:
```bash
npm run lint
```
