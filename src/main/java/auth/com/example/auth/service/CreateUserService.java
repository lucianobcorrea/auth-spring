package auth.com.example.auth.service;

import auth.com.example.auth.controller.request.user.UserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {
    public ResponseEntity<Void> crete(UserRequest data) {


        return ResponseEntity.ok().build();
    }
}
