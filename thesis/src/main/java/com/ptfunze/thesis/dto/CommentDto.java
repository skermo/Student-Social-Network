package com.ptfunze.thesis.dto;

import lombok.*;

import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentDto {
    private UUID id;
    private String text;
    private ZonedDateTime createdOn;
    private ZonedDateTime updatedOn;
    private UserDto user;
    private UUID postId;
}
