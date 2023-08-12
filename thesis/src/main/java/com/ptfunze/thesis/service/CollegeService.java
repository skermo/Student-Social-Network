package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.CollegeDto;

import java.util.List;

public interface CollegeService {
    CollegeDto createCollege(CollegeDto collegeDto);
    List<CollegeDto> getAllColleges();
}
