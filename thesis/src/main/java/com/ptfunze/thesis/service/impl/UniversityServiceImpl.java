package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.UniversityDto;
import com.ptfunze.thesis.entity.University;
import com.ptfunze.thesis.repository.UniversityRepository;
import com.ptfunze.thesis.service.UniversityService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UniversityServiceImpl implements UniversityService {
    private final ModelMapper mapper;
    private final UniversityRepository universityRepository;

    public UniversityServiceImpl(ModelMapper mapper, UniversityRepository universityRepository) {
        this.mapper = mapper;
        this.universityRepository = universityRepository;
    }

    @Override
    public UniversityDto createUniversity(UniversityDto universityDto) {
        University university = mapToEntity(universityDto);
        university = universityRepository.save(university);
        return mapToDto(university);
    }

    @Override
    public List<UniversityDto> getAllUniversities() {
        List<University> universities = universityRepository.findAll();
        return universities.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private UniversityDto mapToDto(University university) {
        return mapper.map(university, UniversityDto.class);
    }

    private University mapToEntity(UniversityDto universityDto) {
        return mapper.map(universityDto, University.class);
    }
}
