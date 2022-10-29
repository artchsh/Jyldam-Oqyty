@echo off
:START
cls
:::  _____ _____ ___  ______ _____ ___________ 
::: /  ___|_   _/ _ \ | ___ \_   _|  ___| ___ \
::: \ `--.  | |/ /_\ \| |_/ / | | | |__ | |_/ /
:::  `--. \ | ||  _  ||    /  | | |  __||    / 
::: /\__/ / | || | | || |\ \  | | | |___| |\ \ 
::: \____/  \_/\_| |_/\_| \_| \_/ \____/\_| \_|
for /f "delims=: tokens=*" %%A in ('findstr /b ::: "%~f0"') do @echo(%%A
title Jyldam-Oqyty Developer Tool
echo [1] - Start Admin Client Interface
echo [2] - Start User Client Interface
echo [3] - Start API Server
echo [4] - Start all (works bad)
echo [5] - Exit
set /p "choice=Your choice: "
if %choice% == 1 goto ACI
if %choice% == 2 goto UCI
if %choice% == 3 goto API
if %choice% == 4 goto ALL
if %choice% == 5 goto EXIT

goto START

:ACI
echo ACI
start cmd /k npm run AdminClient
goto START

:UCI
echo UCI
start cmd /k npm run UserClient
goto START

:API
echo API
start cmd /k npm run serverDev
goto START

:ALL
echo API
start cmd /k npm run dev
goto START

:EXIT
PAUSE