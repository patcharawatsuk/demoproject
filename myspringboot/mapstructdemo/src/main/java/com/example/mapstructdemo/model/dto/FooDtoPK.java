package com.example.mapstructdemo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FooDtoPK {

    private int foodtoId;
    private int foodtoLinenum;
}
