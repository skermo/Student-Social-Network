package com.ptfunze.thesis.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {
    private UUID id;
    private String text;
    private ZonedDateTime createdOn;
    private ZonedDateTime updatedOn;
    private UUID userId;
    private UUID postId;
}
