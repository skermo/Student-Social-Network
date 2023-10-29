package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.CollegeDto;
import com.ptfunze.thesis.entity.College;
import com.ptfunze.thesis.entity.University;
import com.ptfunze.thesis.exception.NotFoundException;
import com.ptfunze.thesis.repository.CollegeRepository;
import com.ptfunze.thesis.repository.UniversityRepository;
import com.ptfunze.thesis.service.CollegeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CollegeServiceImpl implements CollegeService {

    private final ModelMapper mapper;
    private final CollegeRepository collegeRepository;
    private final UniversityRepository universityRepository;

    public CollegeServiceImpl(ModelMapper mapper, CollegeRepository collegeRepository,
                              UniversityRepository universityRepository) {
        this.mapper = mapper;
        this.collegeRepository = collegeRepository;
        this.universityRepository = universityRepository;
    }

    @Override
    public CollegeDto createCollege(CollegeDto collegeDto) {
        University university = universityRepository
                .findById(collegeDto.getUniversityId())
                .orElseThrow(() -> new NotFoundException("University not found"));
        collegeDto.setCity(university.getCity());
        collegeDto.setCountry(university.getCountry());
        College college = mapToEntity(collegeDto);
        college = collegeRepository.save(college);
        return mapToDto(college);
    }

    @Override
    public List<CollegeDto> getAllColleges() {
        List<College> colleges = collegeRepository.findAll();
        return colleges.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CollegeDto getCollegeById(UUID id) {
        return mapToDto(collegeRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("College not found")));
    }

    private CollegeDto mapToDto(College college) {
        return mapper.map(college, CollegeDto.class);
    }

    private College mapToEntity(CollegeDto collegeDto) {
        return mapper.map(collegeDto, College.class);
    }
}
