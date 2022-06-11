package com.example.mapstructdemo;

import com.example.mapstructdemo.mapper.FooMapper;
import com.example.mapstructdemo.model.dto.FooDto;
import com.example.mapstructdemo.model.dto.FooDtoPK;
import com.example.mapstructdemo.model.entity.Foo;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class MapstructdemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(MapstructdemoApplication.class, args);

        FooDto fooDto = FooDto.builder()
                .id(FooDtoPK.builder()
                        .foodtoId(1)
                        .foodtoLinenum(1)
                        .build())
                .br("string")
                .bz(1)
                .build();
        
        FooDto fooDto1 = FooDto.builder()
                .br("string2")
                .bz(2)
                .build();

        List<FooDto> fooDtos = new ArrayList<>();
        fooDtos.add(fooDto);
        fooDtos.add(fooDto1);

                //new FooDto("string", 1);

        FooMapper mapper = Mappers.getMapper(FooMapper.class);
//        System.out.println(fooDto.getBr().getClass() + " " + ((Object)fooDto.getBz()).getClass().getSimpleName());
//        Foo foo = mapper.fooDtoToFoo(fooDto);
//        System.out.println(foo.getBar().getClass() + " " + foo.getBaz().getClass());

        List<Foo> foos = mapper.fooDtosToFoos(fooDtos);
        for(Foo f : foos){
            System.out.println(f);
        }
    }

}
