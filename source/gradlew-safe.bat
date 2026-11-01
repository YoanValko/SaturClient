@echo off
setlocal EnableExtensions
set "GRADLE_USER_HOME=%~dp0.gradle-home"
call "%~dp0gradlew.bat" %*
set "RC=%ERRORLEVEL%"
endlocal & exit /b %RC%
