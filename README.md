# SkyPulse Weather App — React + Vite

A React/Vite edition of the SkyPulse weather dashboard.

## Requirements
- Node.js 18 or newer
- npm (included with Node.js)
- Internet connection for live weather and air-quality API data

## Run on Windows
1. Extract this ZIP.
2. Open the `SkyPulse_React_Vite_Fixed` folder.
3. Double-click `START_SKYPULSE.bat`.
4. Wait for dependencies to install and Vite to start.
5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Run manually
```bash
npm install
npm run dev
```

## Production build
```bash
npm install
npm run build
npm run preview
```

## Demo admin login
- Email: `admin@skypulse.com`
- Password: `admin123`

You can also create a user account from the Sign Up tab.

## Technology
React 18, ReactDOM, Vite 5, JavaScript, HTML, CSS, Open-Meteo APIs, LocalStorage, Geolocation and Web Speech API.

## Project note
This is a compatibility-focused React migration: React mounts the existing SkyPulse interface, while the retained feature controller handles many original interactions. It is not yet a full component-by-component React rewrite.

LocalStorage login is for an academic demonstration only, not production-grade authentication. World-map temperatures are representative coordinate readings, not official national averages.
