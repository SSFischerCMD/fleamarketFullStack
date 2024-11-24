// fetch() ist eine eingebaute JavaScript-Funktion, die verwendet wird, 
// um HTTP-Anfragen (z. B. GET, POST) an einen Server zu senden.

// Es arbeitet mit Promises, was bedeutet, dass es asynchron ist – 
// es startet eine Anfrage und wartet, bis eine Antwort vom Server zurückkommt.

// Grundaufbau
//     Standardmäßig verwendet fetch() die Methode GET  (Daten vom Server lesen).
//     fetch(url, options) options ist optional. Zusätzliche Einstellungen wie Methode (GET, POST), Header, oder der Body der Anfrage.

    // Antwort vom Server abholen: Sobald der Server antwortet, erhalten wir ein Response-Objekt. 
    // Dieses enthält viele Informationen wie den Status der Anfrage (z. B. 200 für Erfolg).
    
     // Die Serverantwort wird oft als JSON-String gesendet. 
     // Mit response.json() wird dieser String in ein nutzbares JavaScript-Objekt umgewandelt.
//     .then(response => response.json())  Konvertiert die Antwort (Response) in ein JSON-Objekt.

//     .then(data => {
//         // Nutze die Daten hier
//     })
//     .catch(error => {
//         // Fehlerbehandlung   Fängt Fehler ab, z. B. wenn der Server nicht erreichbar ist.

//     });

// 1. Produkte von DummyJSON abrufen
fetch('https://dummyjson.com/products')
.then(response => response.json())          //Antwort in JSON umwandeln

.then(data => {
  const products = data.products;           //Die API gibt ein Objekt zurück, das ein products-Array enthält. Wir speichern dieses in einer var.
  const productList = document.getElementById('product-list'); // 4. Referenz auf die <ul>

  // 5. Jedes Produkt als <li> hinzufügen
  products.forEach(product => {
    const listItem = document.createElement('li'); // Neues <li>-Element erstellen
    listItem.innerHTML = `
        <strong>${product.title}</strong><br>
        <img src="${product.thumbnail}" alt="${product.title}" style="width:100px; height:auto; border-radius:5px; margin-bottom:10px;"><br>
        Price: $${product.price}<br>
        <em>${product.description}</em>
    `;
    productList.appendChild(listItem); // <li> zur Liste hinzufügen
  });
})
.catch(error => {
  console.error('Error:', error);
  // Fehlernachricht anzeigen
  const productList = document.getElementById('product-list');
  productList.innerHTML = '<li>Failed to load products. Please try again later.</li>';
});
