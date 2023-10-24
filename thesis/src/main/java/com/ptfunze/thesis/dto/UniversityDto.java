package com.ptfunze.thesis.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UniversityDto {
    private UUID id;
    private String fullName;
    private String abbreviation;
    private String city;
    private String country;
    private String imageUrl;
}
