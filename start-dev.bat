@echo off
REM Portfolio Project - Quick Start Script for Windows

echo.
echo ========================================
echo   Portfolio Website - Quick Start
echo ========================================
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Starting Backend Server...
start "Backend - Portfolio API" cmd /k "cd backend && npm install && npm run dev"

timeout /t 3 /nobreak

echo Starting Frontend Development Server...
start "Frontend - Portfolio Site" cmd /k "cd portfolio-site && npm install && npm run dev"

echo.
echo ========================================
echo All services started!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Close either window to stop that service.
echo Press any key to exit this script...
pause
