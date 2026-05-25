# MoviesApp

Aplicación móvil desarrollada con React Native para explorar películas, consultar detalles, buscar títulos y descubrir contenido popular.

## Características

- Listado de películas populares
- Películas en cartelera
- Próximos estrenos
- Búsqueda de películas
- Detalle de cada película
- Navegación entre pantallas
- Diseño atractivo

## Tecnologías

- React Native
- TypeScript
- React Navigation
- Axios
- The Movie Database (TMDB) API

## Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/Cexs010/moviesApp.git
cd moviesApp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env`:

```env
MOVIE_DB_API_KEY=tu_api_key
```

### 4. Ejecutar la aplicación

#### Android

```bash
npx react-native run-android
```

#### iOS

```bash
npx react-native run-ios
```

## Estructura del proyecto

```text
├── config
│   ├── adapters
│   │   └── http
│   │       ├── axios.adapter.ts
│   │       └── http.adapter.ts
│   └── helpers
├── core
├── infrastructure
├── presentation
│   ├── components
│   ├── hooks
│   ├── navigation
│   │   └── StackNavigation.tsx
│   └── screens
│       ├── details
│       │   └── DetailsScreen.tsx
│       └── home
│           └── HomeScreen.tsx
└── App.tsx

```

## API

La app utiliza la API de TMDB.

Documentación:

https://developer.themoviedb.org/

## Scripts disponibles

```bash
npm start
npm run android
npm run ios
npm test
```

## Autor

Cesar Sampallo

GitHub: https://github.com/Cexs010
