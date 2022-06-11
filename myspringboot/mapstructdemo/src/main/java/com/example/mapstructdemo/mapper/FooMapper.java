package com.example.mapstructdemo.mapper;

import com.example.mapstructdemo.model.dto.FooDto;
import com.example.mapstructdemo.model.entity.Foo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValueMappingStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(
        componentModel = "spring",
        nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_DEFAULT
)
public interface FooMapper {

    @Mapping(target = "bar", source = "br")
    @Mapping(target = "baz", source = "bz")
    @Mapping(target = "id.fooId", source = "id.foodtoId")
    @Mapping(target = "id.fooLinenum", source = "id.foodtoLinenum")
    Foo fooDtoToFoo(FooDto dto);
    List<Foo> fooDtosToFoos(List<FooDto> dtos);
}
