package services;
import java.util.Optional;
import org.springframework.stereotype.Service;
import models.User;
import repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public Optional<User> getUserbyEMail(String eMail) {
        return userRepository.findByEmail(eMail);
    }

    public User createNewUser(User user) {
        return userRepository.save(user);
    }
    

}
