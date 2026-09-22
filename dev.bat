@echo off
REM  Start the MQO site dev server. Installs dependencies on first run.

set "NODEDIR=%LOCALAPPDATA%\nodejs"

if not exist "%NODEDIR%\node.exe" (
  echo.
  echo   Node.js not found at %NODEDIR%
  echo   Run install-node.bat in the MQO folder first.
  echo.
  pause
  exit /b 1
)

set "PATH=%NODEDIR%;%PATH%"
cd /d "%~dp0"

if not exist "node_modules\" (
  echo.
  echo   First run - installing dependencies. This takes a minute or two.
  echo.
  call npm install
  if errorlevel 1 goto :fail
)

echo.
echo   Dev server starting - open http://localhost:3000
echo   Press Ctrl+C in this window to stop it.
echo.
call npm run dev
exit /b 0

:fail
echo.
echo   npm install failed. Copy the messages above and send them to Claude.
echo.
pause
exit /b 1
