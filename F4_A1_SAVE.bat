@echo off

@REM node  "C:\Users\bruno\Desktop\Proyectos\Propios\Forza 4\FirstLoad"
@REM start msedge "C:\Users\bruno\Desktop\Proyectos\Propios\Forza 4\Front\index.html"
@REM exit

:LOOP
start msedge  "C:\Users\bruno\Desktop\Proyectos\Propios\Forza 4\SaveData\index.html"
echo Podemos proseguir? 
choice /c yn /n /m  "(y/n)"
if errorlevel 2 (
    cls
    echo Ok
    goto :LOOP
) else (
    node "C:\Users\bruno\Desktop\Proyectos\Propios\Forza 4\Update\update.js"
    goto :ENDLOOP
)

:ENDLOOP

