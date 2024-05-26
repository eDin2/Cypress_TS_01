/// <reference types="cypress" />

import selectors from "../fixtures/loginPageSelectors.json";

// Definieren Sie ein spezifischeres Interface für die Login-Seite
// ****************************************************************
/* 
Das Interface LoginPageSelectors ist explizit definiert. 
Es legt genau fest, welche Schlüssel das Interface enthält und dass jeder dieser Schlüssel einen Wert vom Typ string haben muss. 
Dies bietet eine klare Struktur und ermöglicht es TypeScript, eine genaue Typüberprüfung durchzuführen. 
Wenn Sie versuchen, auf einen Schlüssel zuzugreifen, der nicht definiert ist, oder wenn Sie einen anderen Typ zuweisen, wird TypeScript einen Fehler ausgeben.

interface LoginPageSelectors {
  usernameField: string;
  passwordField: string;
  Login: string;
  standard_user: string;
  secret_sauce: string;
}
*/

/* 
Das Interface LoginPageSelectors verwendet eine Index-Signatur. 
Dies bedeutet, dass das Interface eine unbekannte Anzahl von Schlüsseln haben kann, solange jeder Schlüssel vom Typ string ist. 
Dies bietet mehr Flexibilität, da Sie beliebige Schlüssel hinzufügen können, aber es bietet weniger Sicherheit bei der Typüberprüfung, 
da TypeScript nicht überprüfen kann, welche spezifischen Schlüssel vorhanden sind. 
*/
interface LoginPageSelectors {
  [key: string]: string;
}
// ****************************************************************

// Exportieren Sie die Selektoren direkt, entsprechend dem neuen Interface
// in den commands.ts wird überprüft ob die übergebenen parameter in dieser datei existieren
export const loginPagePom: LoginPageSelectors = {
  usernameField: selectors.loginPageInputField.username,
  passwordField: selectors.loginPageInputField.password,
  Login: selectors.loginPageButtons.login,
  standard_user: selectors.users.standard_user,
  secret_sauce: selectors.loginPagePassword.secret_sauce,
};
