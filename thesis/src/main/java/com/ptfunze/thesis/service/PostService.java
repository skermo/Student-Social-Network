package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.PostDto;
import com.ptfunze.thesis.request.CommentRequest;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.UUID;

public interface PostService {
    Page<PostDto> getAllPosts(int pageNo, int pageSize, String sortBy, String sortDir);
    PostDto createPost(PostDto postDto);
    PostDto getPostById(UUID id);
    void likePost(UUID id);
    void commentPost(CommentRequest commentRequest);
}
