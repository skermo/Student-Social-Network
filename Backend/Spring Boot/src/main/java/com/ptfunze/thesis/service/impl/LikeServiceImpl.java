package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.LikeDto;
import com.ptfunze.thesis.entity.Like;
import com.ptfunze.thesis.entity.Post;
import com.ptfunze.thesis.entity.User;
import com.ptfunze.thesis.exception.NotFoundException;
import com.ptfunze.thesis.repository.LikeRepository;
import com.ptfunze.thesis.repository.PostRepository;
import com.ptfunze.thesis.repository.UserRepository;
import com.ptfunze.thesis.service.LikeService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class LikeServiceImpl implements LikeService {
    private final ModelMapper mapper;
    private final LikeRepository likeRepository;

    public LikeServiceImpl(LikeRepository likeRepository, ModelMapper mapper) {
        this.likeRepository = likeRepository;
        this.mapper = mapper;
    }

    private LikeDto mapToDto(Like like) {
        return mapper.map(like, LikeDto.class);
    }

    public Like mapToEntity(LikeDto likeDto) {
        return mapper.map(likeDto, Like.class);
    }
}
