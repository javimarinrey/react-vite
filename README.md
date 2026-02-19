# React App + Typescript + Vite

## Dependencias
- bootstrap
- react-bootstrap
- react-router-dom
- axios


```
src/
├── assets/              # Imágenes, fuentes, SVGs
├── components/          # Componentes reutilizables (UI)
│   ├── common/          # Botones, inputs, alertas personalizadas
│   │   └── CustomButton.tsx
│   └── layout/          # Componentes de estructura
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Sidebar.tsx
├── features/            # Módulos basados en funcionalidades (Lógica + UI)
│   ├── auth/            # Todo lo relacionado a login/registro
│   └── dashboard/       # Vistas y componentes del panel principal
├── hooks/               # Custom hooks (ej: useAuth, useFetch)
├── pages/               # Componentes que representan rutas completas
│   ├── Home.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
├── services/            # Llamadas a API (Axios/Fetch)
├── store/               # Estado global (Redux, Zustand o Context API)
├── styles/              # CSS/SASS global o sobrescritura de Bootstrap
│   └── main.css
├── types/               # Definiciones de interfaces y tipos TS globales
│   └── index.d.ts
├── utils/               # Funciones de ayuda (formateo de fechas, validaciones)
├── App.tsx              # Rutas y configuración principal
└── main.tsx             # Punto de entrada (donde importas Bootstrap)
```
