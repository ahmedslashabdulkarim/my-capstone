
Dies Projekt ist eine Full‑Stack‑Anwendung (Spring Boot + React + TypeScript + Vite + MongoDB) zur Verwaltung von Aufgaben (To‑Dos).
- Ist als Abschlussprojekt entwickelt und zeigt die vollständige Umsetzung einer Web‑Applikation mit:
Backend: Spring Boot + Java, Datenbank: MongoDB, Frontend: React + TypeScript + Vite, Kommunikation: REST‑API.


* Module-Backend – Spring Boot + Java
  Verwendete Technologien:
  Spring Boot (Java),
  REST‑API,
  MongoDB,
  CRUD‑Funktionalität,
  Unit‑ und Integrationstests vorhanden.

* Module-Frontend – React + TypeScript + Vite
  Verwendete Technologien:
  React, TypeScript, Vite, React Router, API REST


---- -- Projekt starten -- ----

1- Backend starten (Spring Boot)
* Voraussetzungen:
- Java 25 & Maven & MongoDB läuft lokal auf: Code - mongodb://localhost:27017

* Starten: bash - 
cd backend
mvn clean install
mvn spring-boot:run

* Backend läuft unter: Code - http://localhost:8080

2- Frontend starten (React + TypeScript + Vite)
* Voraussetzungen:
- Node.js & npm

* Starten: bash -
cd frontend
npm install
npm run dev

* Frontend läuft unter: Code - http://localhost:5173

* API‑Tests mit Postman
Base URL: Code - http://localhost:8080/api/todos

---- -- -- ----
1) POST – Neues Todo erstellen
Endpoint:
Code - /api/todos
JSON‑Body:
json
{
"title": "Lernen",
"description": "backend",
"done": false
}

2) GET: – Alle Todos abrufen
Code - /api/todos

3) GET: – Todo nach ID abrufen
Code - /api/todos/{id}

4) PUT: – Todo aktualisieren
Code - /api/todos/{id}
JSON‑Body:
json
{
"title": "Updated Task",
"description": "Updated description",
"done": true
}

5) DELETE – Todo löschen
Code - /api/todos/{id}

---- -- -- ----


