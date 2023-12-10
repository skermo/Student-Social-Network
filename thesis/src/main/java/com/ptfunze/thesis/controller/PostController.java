package com.ptfunze.thesis.controller;

import com.ptfunze.thesis.dto.PostDto;
import com.ptfunze.thesis.request.CommentRequest;
import com.ptfunze.thesis.request.LikeRequest;
import com.ptfunze.thesis.service.PostService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<Page<PostDto>> getAllItems(
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = "id", required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir) {
        return new ResponseEntity<>(postService.getAllPosts(pageNo, pageSize, sortBy, sortDir), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PostDto> newPost(@RequestBody PostDto postDto) {
        return new ResponseEntity<>(postService.createPost(postDto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public PostDto getPostById(@PathVariable(name = "id") UUID id) {
        return postService.getPostById(id);
    }

    @PostMapping("/like")
    public void like(@RequestBody LikeRequest likeRequest) {
        postService.likePost(likeRequest.getPostId());
    }

    @PostMapping("/comment")
    public void comment(@RequestBody CommentRequest commentRequest) {
        postService.commentPost(commentRequest);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<PostDto>> searchItems(
            @RequestParam("name") String name,
            @RequestParam("category") String category,
            @RequestParam("university") String university,
            @RequestParam("college") String college,
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "2", required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = "title", required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir) {
        return new ResponseEntity<>(postService.searchPosts(name, category, university, college,
                pageNo, pageSize, sortBy, sortDir), HttpStatus.OK);
    }
}
