package repositories.customRep;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

import models.Product;

public class ProductRepositoryImpl implements ProductRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<CategoryCount> findCategoryCounts() {
        Aggregation aggregation = Aggregation.newAggregation(
            Aggregation.group("category").count().as("count"),
            Aggregation.project("count").and("category").previousOperation()
        );

        AggregationResults<CategoryCount> results = mongoTemplate.aggregate(aggregation, Product.class, CategoryCount.class);
        return results.getMappedResults();
    }

    public static class CategoryCount {
        private String category;
        private int count;

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }
    }
}
