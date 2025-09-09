# Basis-Image mit Java Laufzeit
FROM eclipse-temurin:21-jre-alpine

# ausfürbare Datei in den container kopieren
COPY target/fleamarket-Backend-0.0.1.jar fleamarket-Backend-0.0.1.jar

#Port freigeben
EXPOSE 8080

# Startkommando
ENTRYPOINT ["java", "-jar", "app.jar"]