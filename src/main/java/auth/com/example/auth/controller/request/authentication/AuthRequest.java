package auth.com.example.auth.controller.request.authentication;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthRequest {

    private String email;
    private String password;
}
