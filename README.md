# Cypress + TypeScript
Cypress with TS 

# Login Feature Test Suite
Diese Test Suite verwendet Cypress und TypeScript, um das Login-Feature einer Webanwendung zu testen.

## Beschreibung
Die Test Suite simuliert den Login-Prozess eines Benutzers, indem sie die Eingabe von Benutzername und Passwort sowie das Klicken auf den Login-Button automatisiert.

## Setup
Stellen Sie sicher, dass Sie die neueste Version von Node.js installiert haben und führen Sie dann folgenden Befehl aus, um Cypress und andere Abhängigkeiten zu installieren:
bash
npm install

*****

## Testausführung
Um die Tests zu starten, führen Sie den folgenden Befehl aus:
npx cypress open

*****

## Testfälle
- Die Testfälle sind wie folgt definiert:
	- Seite besuchen: Besucht die Startseite der Anwendung.
	- Benutzernamen eingeben: Gibt den Benutzernamen standard_user in das Feld für den Benutzernamen ein. 
	- Passwort eingeben: Gibt das Passwort secret_sauce in das Feld für das Passwort ein.
	- Auf Login klicken: Klickt auf den Login-Button, um den Anmeldevorgang abzuschließen.

#### Selektoren und Daten
Die Selektoren und Benutzerdaten werden in einer separaten JSON-Datei (loginPageSelectors.json) verwaltet, um die Wartung zu erleichtern.
Zugrif auf die selectoren erfolgt über "interface"

## Interface
Das Interface LoginPageSelectors definiert die Typen für die Selektoren und Benutzerdaten, um Typsicherheit zu gewährleisten.

## Mitwirken
Beiträge zu dieser Test Suite sind willkommen. Bitte senden Sie Pull Requests oder erstellen Sie Issues, um Verbesserungen vorzuschlagen.
