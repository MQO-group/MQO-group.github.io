@echo off
REM  Build the static site into out\ - the folder you deploy.

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
  call npm install
  if errorlevel 1 goto :fail
)

call npm run build
if errorlevel 1 goto :fail

echo.
echo   Done. Static site is in:  %~dp0out
echo.
pause
exit /b 0

:fail
echo.
echo   Build failed. Copy the messages above and send them to Claude.
echo.
pause
exit /b 1
