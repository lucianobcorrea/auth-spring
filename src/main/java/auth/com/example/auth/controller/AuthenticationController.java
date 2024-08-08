package auth.com.example.auth.controller;

import auth.com.example.auth.controller.request.authentication.AuthRequest;
import auth.com.example.auth.controller.request.user.UserRequest;
import auth.com.example.auth.service.AuthorizationService;
import auth.com.example.auth.service.CreateUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthorizationService authorizationService;

    @Autowired
    private CreateUserService createUserService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Void> login(@RequestBody @Valid AuthRequest data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword());
        var auth = authenticationManager.authenticate(usernamePassword);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> register(@RequestBody @Valid UserRequest data) {
        return createUserService.create(data);
    }
}
