package com.ptfunze.thesis.service.impl;

import com.ptfunze.thesis.dto.CommentDto;
import com.ptfunze.thesis.dto.LikeDto;
import com.ptfunze.thesis.dto.PostDto;
import com.ptfunze.thesis.entity.Like;
import com.ptfunze.thesis.entity.Post;
import com.ptfunze.thesis.entity.User;
import com.ptfunze.thesis.exception.NotFoundException;
import com.ptfunze.thesis.exception.UnauthorizedException;
import com.ptfunze.thesis.repository.CommentRepository;
import com.ptfunze.thesis.repository.LikeRepository;
import com.ptfunze.thesis.repository.PostRepository;
import com.ptfunze.thesis.repository.UserRepository;
import com.ptfunze.thesis.request.CommentRequest;
import com.ptfunze.thesis.service.CommentService;
import com.ptfunze.thesis.service.PostService;
import jakarta.transaction.Transactional;
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
    private final LikeRepository likeRepository;
    private final LikeServiceImpl likeService;
    private final CommentRepository commentRepository;
    private final CommentServiceImpl commentService;
    private final ModelMapper mapper;

    public PostServiceImpl(PostRepository postRepository, UserRepository userRepository, LikeRepository likeRepository, LikeServiceImpl likeService, CommentRepository commentRepository, CommentServiceImpl commentService, ModelMapper mapper) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.likeRepository = likeRepository;
        this.likeService = likeService;
        this.commentRepository = commentRepository;
        this.commentService = commentService;
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
        else throw new UnauthorizedException("User not allowed to access post");
    }

    @Transactional
    @Override
    public void likePost(UUID id) {
        postRepository.findById(id).orElseThrow(() -> new NotFoundException("Post not found"));
        LikeDto likeDto = LikeDto.builder()
                .postId(id)
                .userId(getAuthUser().getId())
                .build();

        if (likeRepository.existsByUserIdAndPostId(likeDto.getUserId(), likeDto.getPostId())) {
            Like like = likeRepository.findByUserIdAndPostId(likeDto.getUserId(), likeDto.getPostId());
            likeRepository.delete(like.getId());
        } else likeRepository.save(likeService.mapToEntity(likeDto));
    }

    @Override
    public void commentPost(CommentRequest commentRequest) {
        postRepository.findById(commentRequest.getPostId()).orElseThrow(() -> new NotFoundException("Post not found"));
        CommentDto commentDto = CommentDto.builder()
                .postId(commentRequest.getPostId())
                .userId(getAuthUser().getId())
                .text(commentRequest.getText())
                .build();

        commentRepository.save(commentService.mapToEntity(commentDto));
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
