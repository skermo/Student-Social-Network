package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.CategoryDto;
import com.ptfunze.thesis.entity.Category;
import com.ptfunze.thesis.repository.CategoryRepository;
import com.ptfunze.thesis.service.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final ModelMapper mapper;
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(ModelMapper mapper, CategoryRepository categoryRepository) {
        this.mapper = mapper;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = mapToEntity(categoryDto);
        category = categoryRepository.save(category);
        return mapToDto(category);
    }

    @Override
    public List<CategoryDto> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private CategoryDto mapToDto(Category category) {
        return mapper.map(category, CategoryDto.class);
    }

    private Category mapToEntity(CategoryDto categoryDto) {
        return mapper.map(categoryDto, Category.class);
    }
}
