package com.ptfunze.thesis.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull
    @Size(min = 2, message = "Title must contain at least 2 characters")
    @Size(max = 255, message = "Title cannot contain more than 255 characters")
    private String title;

    @NotNull
    @Size(min = 2, message = "Description must contain at least 2 characters")
    @Size(max = 1000, message = "Description cannot contain more than 1000 characters")
    private String description;

    @CreationTimestamp
    @Column(name = "created_on")
    private ZonedDateTime createdOn;

    @UpdateTimestamp
    @Column(name = "updated_on")
    private ZonedDateTime updatedOn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
