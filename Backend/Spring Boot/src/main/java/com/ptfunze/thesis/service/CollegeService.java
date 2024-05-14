package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.CollegeDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;

public interface CollegeService {
    CollegeDto createCollege(CollegeDto collegeDto);
    List<CollegeDto> getAllColleges();
    CollegeDto getCollegeById(UUID id);

    List<CollegeDto> getCollagesByUniversityId(UUID universityId);
}
