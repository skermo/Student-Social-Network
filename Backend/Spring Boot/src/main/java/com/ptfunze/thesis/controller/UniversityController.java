package com.ptfunze.thesis.controller;

import com.ptfunze.thesis.dto.UniversityDto;
import com.ptfunze.thesis.service.UniversityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/universities")
public class UniversityController {
    private final UniversityService universityService;

    public UniversityController(UniversityService universityService) {
        this.universityService = universityService;
    }

    @PostMapping
    public ResponseEntity<UniversityDto> newUniversity(@RequestBody UniversityDto universityDto) {
        return new ResponseEntity<>(universityService.createUniversity(universityDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<UniversityDto>> getAllUniversities() {
        return new ResponseEntity<>(universityService.getAllUniversities(), HttpStatus.OK);
    }
}
