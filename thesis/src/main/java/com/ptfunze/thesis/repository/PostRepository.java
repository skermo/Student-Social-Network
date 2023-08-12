package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
}
