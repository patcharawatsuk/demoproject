package com.example.mapstructdemo.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Foo {

    private FooPK id;
    private String bar;
    private String baz;
}
