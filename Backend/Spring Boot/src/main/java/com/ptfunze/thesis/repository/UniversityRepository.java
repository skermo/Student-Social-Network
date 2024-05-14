package com.ptfunze.thesis.repository;

import com.ptfunze.thesis.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UniversityRepository extends JpaRepository<University, UUID> {
}
