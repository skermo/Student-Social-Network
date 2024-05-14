package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
    @Query("SELECT p FROM Post p " +
            "WHERE LOWER(p.title) LIKE LOWER(CONCAT('%', :title, '%')) " +
            "AND p.university.fullName LIKE CONCAT('%', :university, '%') " +
            "AND p.college.fullName LIKE CONCAT('%', :college, '%') " +
            "AND p.category.name LIKE CONCAT('%', :category, '%') " +
            "AND (NOT p.isPrivate OR CAST(p.college.id AS string) LIKE CONCAT('%', :collegeId, '%'))")
    Page<Post> searchPosts(String title, String category, String university, String college, String collegeId, Pageable pageable);

    @Query("SELECT p FROM Post p " +
            "WHERE NOT p.isPrivate OR CAST(p.college.id AS string) LIKE CONCAT('%', :collegeId, '%')")
    Page<Post> getAllPosts(String collegeId, Pageable pageable);
}