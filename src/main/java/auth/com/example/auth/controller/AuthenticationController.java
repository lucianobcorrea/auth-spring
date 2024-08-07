package auth.com.example.auth.controller;

import auth.com.example.auth.controller.request.authentication.AuthRequest;
import auth.com.example.auth.controller.request.user.UserRequest;
import auth.com.example.auth.service.AuthorizationService;
import auth.com.example.auth.service.CreateUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthorizationService authorizationService;

    @Autowired
    private CreateUserService createUserService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Void> login(@RequestBody @Valid AuthRequest data) {
        return authorizationService.login(data);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> register(@RequestBody @Valid UserRequest data) {
        return createUserService.crete(data);
    }
}
