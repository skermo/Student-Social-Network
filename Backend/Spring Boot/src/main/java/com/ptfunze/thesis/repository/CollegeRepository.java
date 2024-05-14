package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.College;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CollegeRepository extends JpaRepository<College, UUID> {
    List<College> findByUniversityId(UUID universityId);
}
