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


fetch('https://dummyjson.com/products')
.then(response => response.json())          

.then(data => {
  const products = data.products;           //Das Objekt enthält ein products-Array. Wir speichern dieses in einer const.
  const productList = document.getElementById('containMain'); 
    let i=0;
  products.forEach(product => {
    const ProductItem = document.createElement('a'); // Neues Element erstellen
    ProductItem.setAttribute("href", "javascript:showAlert('This is a custom alert box!')");
    //ProductItem.setAttribute("id", "product"+i);
    i++;
    ProductItem.style = "background-color: white; width: 40%; padding: 2%; margin: 2%;  font-style: normal; text-decoration: none;" ;
    ProductItem.innerHTML = `
        <strong>${product.title}</strong><br>
        <img src="${product.thumbnail}" alt="${product.title}" style="width:100px; height:auto; border-radius:5px; margin-bottom:10px;"><br>
        Price: $${product.price}<br>
        <p id="description">${product.description}</p>
    `;
    productList.appendChild(ProductItem); // 
  });
})
// .then(html => {
//     var product0 = document.getElementById('product0');
//     product0.addEventListener('click', presentProduct);
    
// })
.catch(error => {
  console.error('Error:', error);
  // Fehlernachricht anzeigen
  const productList = document.getElementById('product-list');
  productList.innerHTML = '<li>Failed to load products. Please try again later.</li>';
});



function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'block';
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// Example usage
