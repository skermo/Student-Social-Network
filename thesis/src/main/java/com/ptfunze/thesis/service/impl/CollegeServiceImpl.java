package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.CollegeDto;
import com.ptfunze.thesis.entity.College;
import com.ptfunze.thesis.repository.CollegeRepository;
import com.ptfunze.thesis.service.CollegeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CollegeServiceImpl implements CollegeService {

    private final ModelMapper mapper;
    private final CollegeRepository collegeRepository;

    public CollegeServiceImpl(ModelMapper mapper, CollegeRepository collegeRepository) {
        this.mapper = mapper;
        this.collegeRepository = collegeRepository;
    }

    @Override
    public CollegeDto createCollege(CollegeDto collegeDto) {
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

    private CollegeDto mapToDto(College college) {
        return mapper.map(college, CollegeDto.class);
    }

    private College mapToEntity(CollegeDto collegeDto) {
        return mapper.map(collegeDto, College.class);
    }
}
