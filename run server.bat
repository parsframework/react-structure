@echo off


REM تغییر مسیر به پوشه فایل
cd /d "%~dp0"


REM اجرای فرمان دلخواه
npm run dev


REM جلوگیری از بسته شدن پنجره ترمینال
pause

