package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@EnableMongoRepositories(basePackages = "repositories")
@SpringBootApplication(scanBasePackages = {"com", "services", "repositories", "models"})
public class FleamarketApp {

	public static void main(String[] args) {
		SpringApplication.run(FleamarketApp.class, args);
	}

}
