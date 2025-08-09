package com.example.demo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import models.Product;
import services.ProductService;

@RestController
@RequestMapping("/Demo")
@RequiredArgsConstructor
public class DemoController {

    private final ProductService productService;

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

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(){
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok().build();
    }
}
