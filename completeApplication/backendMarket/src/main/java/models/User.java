
package models;

import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data 
@Document(collection = "user")
public class User {

    @Id
    private String id;

    private String userId;
    private String name;
    private String email;
    private String location;
    private Instant joinedAt;
    private String phone;
    private boolean isVerified;

    // Getter & Setter
    

}
