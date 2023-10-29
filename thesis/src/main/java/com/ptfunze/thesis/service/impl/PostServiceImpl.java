package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.PostDto;
import com.ptfunze.thesis.entity.Post;
import com.ptfunze.thesis.entity.User;
import com.ptfunze.thesis.exception.NotFoundException;
import com.ptfunze.thesis.exception.UnauthorizedException;
import com.ptfunze.thesis.repository.PostRepository;
import com.ptfunze.thesis.repository.UserRepository;
import com.ptfunze.thesis.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final ModelMapper mapper;

    public PostServiceImpl(PostRepository postRepository, UserRepository userRepository, ModelMapper mapper) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    @Override
    public Page<PostDto> getAllPosts(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name())
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
        return postRepository.findAll(pageable)
                .map(this::mapToDto);
    }

    @Override
    public PostDto createPost(PostDto postDto) {
        User user = getAuthUser();
        postDto.setCollegeId(user.getCollege().getId());
        postDto.setUniversityId(user.getUniversity().getId());
        postDto.setUserId(user.getId());
        Post post = postRepository.save(mapToEntity(postDto));
        return mapToDto(post);
    }

    @Override
    public PostDto getPostById(UUID id) {
        User user = getAuthUser();
        Post post = postRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Post not found"));
        if (isAllowedToAccessPost(user, post)) return mapToDto(post);
        else throw new UnauthorizedException("User not allowed to acces post");
    }

    private PostDto mapToDto(Post post) {
        return mapper.map(post, PostDto.class);
    }

    private Post mapToEntity(PostDto postDto) {
        return mapper.map(postDto, Post.class);
    }

    private User getAuthUser() {
        return userRepository.findByEmail(
                SecurityContextHolder
                        .getContext()
                        .getAuthentication()
                        .getName()
        ).orElseThrow(() -> new NotFoundException("User not found"));
    }

    private boolean isAllowedToAccessPost(User user, Post post) {
        if (!post.isPrivate()) return true;
        else return post.getCollege().getId().equals(user.getCollege().getId());
    }
}
