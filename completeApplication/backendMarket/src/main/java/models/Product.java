package models;

import java.time.Instant;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data 
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String title;
    private String description;
    private double price;
    private String category;
    private String location;
    private Seller seller;
    private List<String> images;
    private Instant createdAt;
    private String condition;
    private boolean available;

    // Getter & Setter


}
