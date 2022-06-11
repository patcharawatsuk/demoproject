package com.example.mapstructdemo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class FooDto {

    private FooDtoPK id;
    private String br;
    private int bz;
}
