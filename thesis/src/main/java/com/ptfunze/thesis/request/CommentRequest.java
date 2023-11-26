package com.ptfunze.thesis.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentRequest {
    @NotBlank(message = "Id cannot be empty")
    @org.hibernate.validator.constraints.UUID(message = "Invalid id")
    private UUID postId;

    @NotBlank(message = "Text cannot be empty")
    @Size(max = 255, message = "Text cannot contain more than 255 characters")
    private String text;
}
