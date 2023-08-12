package com.ptfunze.thesis.service;

import com.ptfunze.thesis.request.LoginRequest;
import com.ptfunze.thesis.request.RegisterRequest;
import com.ptfunze.thesis.response.JwtAuthResponse;

public interface AuthService {
    JwtAuthResponse login(LoginRequest loginRequest);

    JwtAuthResponse registration(RegisterRequest registerRequest);

    void logout(String request);
}