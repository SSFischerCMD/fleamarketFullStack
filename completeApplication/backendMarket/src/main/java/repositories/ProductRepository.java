package repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import models.Product;


public interface ProductRepository extends MongoRepository<Product, String> {

    // Beispiel: Alle Produkte nach Kategorie finden
    List<Product> findByCategory(String category);

    // Beispiel: Alle Produkte eines bestimmten Nutzers
    List<Product> findBySellerUserId(String userId);

    // Beispiel: Nur verfügbare Produkte
    List<Product> findByAvailableTrue();

}

