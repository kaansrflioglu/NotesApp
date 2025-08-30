@echo off
echo [1] EF Core CLI yukleniyor (gerekirse)...
dotnet tool install --global dotnet-ef

echo [2] Veritabani guncelleniyor...
dotnet ef database update --project NotesApp.Infrastructure --startup-project NotesApp.Api

echo Tamamlandi.
pause