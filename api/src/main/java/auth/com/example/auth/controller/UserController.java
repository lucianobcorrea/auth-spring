package auth.com.example.auth.controller;

import auth.com.example.auth.controller.response.user.UserResponse;
import auth.com.example.auth.security.AuthenticatedUserService;
import auth.com.example.auth.service.GetUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Autowired
    private GetUsersService getUsersService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public UserResponse user() {
        return authenticatedUserService.getResponse();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("all")
    @ResponseStatus(HttpStatus.OK)
    public List<UserResponse> users() {
        return getUsersService.getUsers();
    }
}
