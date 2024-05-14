package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface LikeRepository extends JpaRepository<Like, UUID> {
    boolean existsByUserIdAndPostId(UUID userId, UUID postId);
    Like findByUserIdAndPostId(UUID userId, UUID postId);

    @Modifying
    @Query("delete from Like l where l.id = ?1")
    void delete(UUID id);
}
