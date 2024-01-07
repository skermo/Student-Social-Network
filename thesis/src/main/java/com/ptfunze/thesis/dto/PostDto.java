package com.ptfunze.thesis.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private UUID id;
    private String title;
    private String description;
    private ZonedDateTime createdOn;
    private ZonedDateTime updatedOn;
    private UUID categoryId;
    private UUID userId;
    private UUID collegeId;
    private UUID universityId;
    private boolean isPrivate;
    private int numberOfLikes;
    private int numberOfComments;
    private List<LikeDto> likes;
    private List<CommentDto> comments;
}
