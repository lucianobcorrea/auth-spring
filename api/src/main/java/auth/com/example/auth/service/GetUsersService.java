package auth.com.example.auth.service;

import auth.com.example.auth.controller.response.user.UserResponse;
import auth.com.example.auth.domain.user.User;
import auth.com.example.auth.mapper.UserMapper;
import auth.com.example.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GetUsersService {

    @Autowired
    private UserRepository userRepository;

    public List<UserResponse> getUsers() {

        List<User> users = userRepository.findAll();

        return users.stream().map(UserMapper::toResponse).collect(Collectors.toList());
    }
}
