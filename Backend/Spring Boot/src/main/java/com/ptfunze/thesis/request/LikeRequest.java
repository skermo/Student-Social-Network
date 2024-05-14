package com.ptfunze.thesis.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LikeRequest {
    @NotBlank(message = "Id cannot be empty")
    @org.hibernate.validator.constraints.UUID(message = "Invalid id")
    private UUID postId;
}
