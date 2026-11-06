@echo off
title SkyPulse Weather App
cd /d "%~dp0"
echo ==========================================
echo          SKYPULSE WEATHER APP
echo ==========================================
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 18 or newer from https://nodejs.org/
  pause
  exit /b 1
)
echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo.
  echo Dependency installation failed. Check your internet connection and try again.
  pause
  exit /b 1
)
echo.
echo Starting SkyPulse...
call npm run dev
pause
