package repositories;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import models.User;

public interface UserRepository  extends MongoRepository<User, String>  {

    public Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    
    <S extends User> S save(S entity);

    

}

