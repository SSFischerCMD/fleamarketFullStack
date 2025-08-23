package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import models.Product;
import repositories.customRep.ProductRepositoryImpl.CategoryCount;
import services.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Demo")
public class DemoController {

    private final ProductService productService;
    
    public DemoController (ProductService productService){
        this.productService = productService;
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