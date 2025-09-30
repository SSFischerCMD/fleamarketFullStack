package com;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = FleamarketApp.class) // importiere die richtige Klasse!
@ActiveProfiles("test")
class DemoApplicationTests {

	@Test
	void contextLoads() {}

}
