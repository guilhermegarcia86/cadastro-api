import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AutorEntity } from "../entity/autor.entity";
import { LivroEntity } from "../entity/livro.entity";
import LivroRepositoryTypeORM from "../livro.repository.typeorm";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "user",
            "password": "user",
            "database": "bookstore",
            "entities": ["dist/**/*.entity{.ts,.js}"],
            "synchronize": true,
            "autoLoadEntities": true
        }),
        TypeOrmModule.forFeature([LivroEntity, AutorEntity])
    ],
    providers: [LivroRepositoryTypeORM],
    exports: [LivroRepositoryTypeORM]

})
export class TypeOrmConfigModule { }