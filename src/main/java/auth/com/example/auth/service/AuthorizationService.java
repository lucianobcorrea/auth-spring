package auth.com.example.auth.service;

import auth.com.example.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }
}

/*
    Toda vez que um usuario tentar logar no sistema, o Spring Security vai chamar esse metodo, mas ele
    nao vai saber por baixo dos pano de onde estamos tirando esse usuario, seja de auth de terceiros (google, facebook,...) ou do
    nosso proprio banco de dados, estamos abstraindo isso pra ele
 */
