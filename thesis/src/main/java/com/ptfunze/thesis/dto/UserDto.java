package com.ptfunze.thesis.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private UUID id;
    private String email;

    @JsonIgnore
    private String password;

    private String firstName;
    private String lastName;
    private Set<RoleDto> roles;
    private UUID collegeId;
    private String imageUrl;
}