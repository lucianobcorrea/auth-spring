package auth.com.example.auth.service;

import auth.com.example.auth.controller.request.authentication.AuthRequest;
import auth.com.example.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }

    public ResponseEntity<Void> login(AuthRequest data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword());
        var auth = authenticationManager.authenticate(usernamePassword);

        return ResponseEntity.ok().build();
    }
}

/*
    Toda vez que um usuario tentar logar no sistema, o Spring Security vai chamar esse metodo, mas ele
    nao vai saber por baixo dos pano de onde estamos tirando esse usuario, seja de auth de terceiros (google, facebook,...) ou do
    nosso proprio banco de dados, estamos abstraindo isso pra ele
 */
