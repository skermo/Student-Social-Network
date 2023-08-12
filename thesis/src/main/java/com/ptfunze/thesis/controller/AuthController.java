package com.ptfunze.thesis.controller;

import com.ptfunze.thesis.request.LoginRequest;
import com.ptfunze.thesis.request.RegisterRequest;
import com.ptfunze.thesis.response.JwtAuthResponse;
import com.ptfunze.thesis.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginRequest loginRequest) {
        JwtAuthResponse jwtAuthResponse = authService.login(loginRequest);
        return ResponseEntity.ok(jwtAuthResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<JwtAuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        JwtAuthResponse jwtAuthResponse = authService.registration(registerRequest);
        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.CREATED);
    }

    @GetMapping("/logout")
    public void logout(@RequestHeader(name = "Authorization") String request) {
        authService.logout(request);
    }
}
