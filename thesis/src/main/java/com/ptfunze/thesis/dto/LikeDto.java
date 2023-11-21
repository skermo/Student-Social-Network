package com.ptfunze.thesis.dto;

import lombok.*;

import java.time.ZonedDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikeDto {
    private UUID id;
    private ZonedDateTime createdOn;
    private UUID userId;
    private UUID postId;
}
