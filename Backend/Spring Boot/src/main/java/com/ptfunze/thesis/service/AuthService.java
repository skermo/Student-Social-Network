package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.UserDto;
import com.ptfunze.thesis.request.LoginRequest;
import com.ptfunze.thesis.request.RegisterRequest;
import com.ptfunze.thesis.response.JwtAuthResponse;

import java.util.UUID;

public interface AuthService {
    JwtAuthResponse login(LoginRequest loginRequest);
    JwtAuthResponse registration(RegisterRequest registerRequest);
    void logout(String request);
    UserDto getUserById(UUID id);
}