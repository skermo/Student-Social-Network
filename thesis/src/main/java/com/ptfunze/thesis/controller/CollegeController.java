package com.ptfunze.thesis.controller;

import com.ptfunze.thesis.dto.CollegeDto;
import com.ptfunze.thesis.service.CollegeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/collages")
public class CollegeController {
    private final CollegeService collegeService;

    public CollegeController(CollegeService collegeService) {
        this.collegeService = collegeService;
    }

    @PostMapping
    public ResponseEntity<CollegeDto> newCollege(@RequestBody CollegeDto collegeDto) {
        return new ResponseEntity<>(collegeService.createCollege(collegeDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<CollegeDto>> getAllCollages() {
        return new ResponseEntity<>(collegeService.getAllColleges(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public CollegeDto getCollegeById(@PathVariable(name = "id") UUID id){
        return collegeService.getCollegeById(id);
    }
}
