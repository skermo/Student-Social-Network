package com.ptfunze.thesis.service;

import com.ptfunze.thesis.dto.PostDto;

import java.util.List;

public interface PostService {
    List<PostDto> getAllPosts(int pageNo, int pageSize, String sortBy, String sortDir);
}
