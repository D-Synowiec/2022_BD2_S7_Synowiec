
# 2022_BD2_S7_Synowiec
Jest to repozytorium projektowe z przedmiotu BD2.
Powyższe repo zawiera wszystkie składowe elementy projektu, które będą oceniane w ramach zaliczenia projektu.

## Uruchomianie aplikacji
Uruchomienie aplikacji odbywa się przez uruchomienie w zależności od systemu operacyjnego skryptu 
```bash
  start.sh
  lub
  start.bat
```
Do folderu API należy dodać .env zawierający następujące pola:

`PGLINK` - Link do bazy danych zawierające wszystkie potrzebne dane np.: `postgres://api:api@srv08.mikr.us:40468/gallery_tests`

`JWT` - Ziarno dla tokenu JWT

W folderze Docker znajduje się tworzenie bazy danych za pomocą Docker'a. Skrypt nie wypełnia podstawowych potrzebnych danych, także warto odtworzyć bazę z backupu znajdującego się w: `Artefakty/17_02`