package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.UserDto;
import com.ptfunze.thesis.entity.Role;
import com.ptfunze.thesis.entity.User;
import com.ptfunze.thesis.exception.ConflictException;
import com.ptfunze.thesis.exception.NotFoundException;
import com.ptfunze.thesis.jwt.JwtUtils;
import com.ptfunze.thesis.repository.RoleRepository;
import com.ptfunze.thesis.repository.UserRepository;
import com.ptfunze.thesis.request.LoginRequest;
import com.ptfunze.thesis.request.RegisterRequest;
import com.ptfunze.thesis.response.JwtAuthResponse;
import com.ptfunze.thesis.service.AuthService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashSet;
import java.util.Set;


@Service
public class AuthServiceImpl implements AuthService {

    private final ModelMapper mapper;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils tokenProvider;

    public AuthServiceImpl(ModelMapper mapper, AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           JwtUtils tokenProvider) {
        this.mapper = mapper;
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Override
    public JwtAuthResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        if (user == null || !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new NotFoundException("Wrong email or password");
        }
        Authentication authentication = authenticationManager
                .authenticate
                        (new UsernamePasswordAuthenticationToken
                                (loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateJwtToken(authentication);
        return new JwtAuthResponse(mapToDto(user), jwt);
    }

    @Override
    public JwtAuthResponse registration(RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new ConflictException("Email already exists");
        }
        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("USER").get();
        roles.add(role);
        User user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder
                        .encode(registerRequest.getPassword()))
                .roles(roles)
                .build();
        userRepository.save(user);
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        registerRequest.getEmail(),
                        registerRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateJwtToken(authentication);
        return new JwtAuthResponse(mapToDto(user), jwt);
    }

    public void logout(String request) {
        String token = null;
        if (StringUtils.hasText(request) && request.startsWith("Bearer ")) {
            token = request.substring(7);
        }
        tokenProvider.invalidateToken(token);
    }

    private UserDto mapToDto(User user) {
        return mapper.map(user, UserDto.class);
    }

    private User mapToEntity(UserDto userDto) {
        return mapper.map(userDto, User.class);
    }
}