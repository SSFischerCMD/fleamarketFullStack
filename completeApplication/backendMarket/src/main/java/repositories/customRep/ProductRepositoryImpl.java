package repositories.customRep;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import models.Product;

public class ProductRepositoryImpl implements ProductRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<String> findDistinctCategories() {
        return mongoTemplate.query(Product.class)
                .distinct("category")
                .as(String.class)
                .all();
    }
}

