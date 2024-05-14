package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.UniversityDto;

import java.util.List;

public interface UniversityService {
    UniversityDto createUniversity(UniversityDto universityDto);

    List<UniversityDto> getAllUniversities();
}
