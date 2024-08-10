package auth.com.example.auth.mapper;

import auth.com.example.auth.controller.request.user.UserRequest;
import auth.com.example.auth.domain.user.User;

public class UserMapper {

    public static User toEntity(UserRequest request) {
        User user = new User();
        user.setEmail(request.getEmail());
        user.setUsername(request.getUsername());
        return user;
    }
}
