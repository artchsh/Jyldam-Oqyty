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
echo [1] - Start Client
echo [2] - Start Server
echo [3] - Start all
echo [4] - Exit
set /p "choice=Your choice: "
if %choice% == 1 goto Client
if %choice% == 2 goto Server
if %choice% == 3 goto ALL
if %choice% == 4 goto EXIT

goto START

:Client
start cmd /k npm run client
goto START

:Server
start cmd /k npm run serverDev
goto START

:ALL
echo API
start cmd /k npm run dev
goto START

:EXIT
PAUSE