package com;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import lombok.RequiredArgsConstructor;
import repositories.UserRepository;
import models.CartItem;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
public class CartController {

    private final UserRepository userRepository;

    // DTO für Requests
    public static class CartItemDto {
        private String productId;
        private Integer quantity;
        public CartItemDto() {}
        public String getProductId() { return productId; }
        public void setProductId(String productId) { this.productId = productId; }
        public Integer getQuantity() { return quantity; }
        public void setQuantity(Integer quantity) { this.quantity = quantity; }
    }

    @GetMapping
    public ResponseEntity<List<CartItem>> getCart(@RequestParam String email) {
        var user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.notFound().build();

        List<CartItem> cart = (user.getCart() != null)
                ? user.getCart()
                : Collections.emptyList();       // typisierte leere Liste

        return ResponseEntity.ok(cart);
    }

    @PostMapping("/items")
    public ResponseEntity<List<CartItem>> addItem(@RequestParam String email,
                                                  @RequestBody CartItemDto req) {
        if (req.getProductId() == null || req.getProductId().isBlank())
            return ResponseEntity.badRequest().build();
        var qty = Math.max(1, req.getQuantity()); // min 1

        var user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.notFound().build();

        if (user.getCart() == null) user.setCart(new ArrayList<>());

        var existing = user.getCart().stream()
            .filter(i -> i.getProductId().equals(req.getProductId()))
            .findFirst();

        if (existing.isPresent()) {
            existing.get().setQuantity(existing.get().getQuantity() + qty);
        } else {
            user.getCart().add(new CartItem(req.getProductId(), qty));
        }
        userRepository.save(user);
        return ResponseEntity.ok(user.getCart());
    }

    @PatchMapping("/items")
    public ResponseEntity<List<CartItem>> setQuantity(@RequestParam String email,
                                                      @RequestBody CartItemDto req) {
        var user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.notFound().build();
        if (user.getCart() == null) user.setCart(new ArrayList<>());

        var it = user.getCart().stream()
            .filter(i -> i.getProductId().equals(req.getProductId()))
            .findFirst();

        if (it.isEmpty()) return ResponseEntity.notFound().build();

        int q = req.getQuantity();
        if (q <= 0) {
            user.getCart().removeIf(i -> i.getProductId().equals(req.getProductId()));
        } else {
            it.get().setQuantity(q);
        }
        userRepository.save(user);
        return ResponseEntity.ok(user.getCart());
    }

    @DeleteMapping("/items/{productId}")
    public ResponseEntity<Void> removeItem(@RequestParam String email,
                                           @PathVariable String productId) {
        var user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.notFound().build();
        if (user.getCart() != null) {
            user.getCart().removeIf(i -> i.getProductId().equals(productId));
            userRepository.save(user);
        }
        return ResponseEntity.noContent().build();
    }
}
