package com;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import models.Product;
import models.User;
import repositories.customRep.ProductRepositoryImpl.CategoryCount;
import services.ProductService;
import services.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FleamarketController {

    private final ProductService productService;
    private final UserService userService;
    
    public FleamarketController (ProductService productService, UserService userService){
        this.productService = productService;
        this.userService = userService;
    }
    
    @Operation(summary = "Alle Kategorien abrufen", description = "Gibt eine Liste von Kategorien-Objekten(Name und Produktanzahl) zurück.")
    @ApiResponse(responseCode = "200", description = "Erfolgreich")
    @GetMapping("/categories")
    public List<CategoryCount> searchCategories(){  
        return productService.getAllCategories();
    }    
    
    @Operation(summary = "Produkte abrufen", description = "Gibt eine Liste von Produkten zurück")
    @ApiResponse(responseCode = "200", description = "Erfolgreich")
    @GetMapping("/products")
    public List<Product> searchProducts(@RequestParam(required = false) String search) {
        if (search == null || search.isBlank()) {
            return productService.getAllProducts(); 
        }
        return productService.search(search);
    }

    @Operation(summary = "Login: Benutzerobjekt anhand der E-Mail suchen", description = "Prüft ob die eingegebenen Daten zu einemBenutzer gehören")
    @ApiResponse(responseCode = "200", description = "Erfolgreich")
    @GetMapping("/userLogin")
    public ResponseEntity<User> findUser(@RequestParam("email") String email) {
        return userService.getUserbyEMail(email)
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @Operation(summary = "Registrierung: Benutzerobjekt wird neu angelegt", description = "Prüft ob man auf Grundlage der angegebenen Daten ein neuen Nutzer anlegen kann")
    @ApiResponse(responseCode = "200", description = "Erfolgreich")
    @GetMapping("/usersRegistry")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User created = userService.createNewUser(user);
        return ResponseEntity.ok(created);
    }

}


/*
    Lombok ist eine Java-Bibliothek, die automatisch Dinge wie Getter, Setter, Konstruktoren usw. generiert.
    Ohne Lombok müsste man einen Konstruktor, der als einmaliger "setter" für die final variable gilt, schreiben:
    ( final bedeutet: Das Feld darf nur einmal gesetzt werden – im Konstruktor.)

        public DemoController(ProductService productService) {
            this.productService = productService;
        }
    ---------------------------------------------------------
    Wie lange lebt dieses Objekt?
        Spring Boot verwaltet die Lebensdauer über sogenannte Beans. Standardmäßig ist jede Bean ein Singleton:

        Das bedeutet: Es gibt genau ein Objekt pro Klasse im gesamten Programm.
        Dieses Objekt wird beim Start der Anwendung erstellt.
        Es bleibt so lange bestehen, bis die Anwendung beendet wird.
        ➡️ Dein ProductService-Objekt wird also einmal erstellt und von allen Controllern oder Services verwendet, die es brauchen.

    ---------------------------------------------------------
    @GetMapping("/")
    public ResponseEntity<Void> check (){
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/submit/leer")
    public ResponseEntity<Void> submit() {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submit(@RequestBody String data) {
        return ResponseEntity.ok(data + "Empfangen: ");
    }
*/