package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Demo")
public class DemoController {

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
        return ResponseEntity.ok("Empfangen: " + data);
    }
}
