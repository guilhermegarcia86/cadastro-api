import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "../livro/livro.entity";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    name: string;

    @OneToMany(type => Livro, livro => livro.autor)
    livros: Livro[]


}