package com.ptfunze.thesis.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "universities")
public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull
    @Size(min = 2, message = "Full name must contain at least 2 characters")
    @Size(max = 255, message = "Full name cannot contain more than 255 characters")
    @Column(name = "full_name")
    private String fullName;

    @NotNull
    @Size(min = 1, message = "Abbreviation must contain at least 1 character")
    @Size(max = 10, message = "Full name cannot contain more than 10 characters")
    private String abbreviation;

    @Size(min = 2, message = "City must contain at least 2 characters")
    @Size(max = 255, message = "City cannot contain more than 255 characters")
    private String city;

    @Size(min = 2, message = "Country must contain at least 2 characters")
    @Size(max = 255, message = "Country cannot contain more than 255 characters")
    private String country;

    @NotNull
    @Size(min = 2, message = "Image url must contain at least 2 characters")
    @Size(max = 255, message = "Image url cannot contain more than 255 characters")
    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "university", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<College> colleges;

    @OneToMany(mappedBy = "university", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> users;
}
