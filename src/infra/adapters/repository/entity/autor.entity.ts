import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LivroEntity } from "./livro.entity";

@Entity()
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    name: string;

    @OneToMany(type => LivroEntity, livro => livro.autor)
    livros: LivroEntity[]

}