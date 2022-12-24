
# Projekt Galeria - Generacja Bazy Danych

Pozwala on na wygenerowanie bazy danych oraz wypełnienie jej tablicami.





## Environment Variables

Aby uruchomić ten projekt, potrzebne są następujące zmienne środowiskowe:

`POSTGRES_USER` - Główny użytkownik bazy danych

`POSTGRES_PASSWORD` - Hasło do głównego użytkownika bazy danych

`POSTGRES_PORT` - Port na którym ma zostać wystawiona baza danych

## Run Locally

Aby móc postawić lokalnie bazę danych, potrzebujecie mieć zainstalowanego [Dockera](https://docs.docker.com/desktop/install/windows-install/).
Klonujemy repozytorium na dysk

```bash
  git clone https://github.com/Anrsh/2022_BD2_S7_Synowiec.git
```

Wchodzimy do folderu docker

```bash
  cd docker
```

Tworzymy plik .env  i uzupełniamy w nim wszystkie potrzebne zmienne.

Uruchamiamy kontener.

```bash
  docker-compose up
```



