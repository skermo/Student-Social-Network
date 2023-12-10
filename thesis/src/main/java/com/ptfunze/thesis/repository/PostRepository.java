package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
//    @Query("SELECT p FROM Post p " +
//            "WHERE i.endDate >= NOW() AND i.startDate <= NOW() " +
//            "WHERE (LOWER(p.title) LIKE LOWER(CONCAT('%', :name, '%') ) " +
//            "OR LOWER(i.category.name) LIKE LOWER(CONCAT('%', :name, '%') ) )" +
//            "AND p.university.full_name LIKE LOWER(CONCAT('%', :name, '%') ) )" +
//            "AND i.category.name LIKE CONCAT('%', :category, '%') ")
//    Page<Post> searchItems(String name, String category, String university, String college, Pageable pageable);

    @Query("SELECT p FROM Post p " +
            "WHERE LOWER(p.title) LIKE LOWER(CONCAT('%', :title, '%')) " +
            "AND p.university.fullName LIKE CONCAT('%', :university, '%') " +
            "AND p.college.fullName LIKE CONCAT('%', :college, '%') " +
            "AND p.category.name LIKE CONCAT('%', :category, '%')")
    Page<Post> searchItems(String title, String category, String university, String college, Pageable pageable);
}