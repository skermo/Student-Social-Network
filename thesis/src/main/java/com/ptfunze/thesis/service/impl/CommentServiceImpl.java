package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.CommentDto;
import com.ptfunze.thesis.entity.Comment;
import com.ptfunze.thesis.entity.Like;
import com.ptfunze.thesis.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    private final ModelMapper mapper;

    public CommentServiceImpl(ModelMapper mapper) {
        this.mapper = mapper;
    }

    private CommentDto mapToDto(Comment comment) {
        return mapper.map(comment, CommentDto.class);
    }

    public Comment mapToEntity(CommentDto commentDto) {
        return mapper.map(commentDto, Comment.class);
    }
}
