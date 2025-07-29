// Importieren des 'fs'-Moduls (File System) eingebaute Node.js-Bibliothek
const fs = require('fs');

// 2 Ausgabe: asynchron = der Event Loop wartet nicht auf das Ergebnis, sondern geht direkt weiter.
fs.readFile('beispiel.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Fehler beim Lesen der Datei:', err);
    return;
  }
  //callback
  console.log('Dateiinhalt:', data);
});

// 3 Ausgabe setTimeout()-Timer wird gesetzt (währendessen geht der vent Loop wieder zur Dateioperation)
setTimeout(() => {
  console.log('3.Ausgabe: 2 Sekunden Timer; der Event Loop handelt es.');
}, 2000);

//  Der Event Loop in Node.js beginnt 
console.log('1.Ausgabe: das hier ist eine einfache synchrone Operation.');

