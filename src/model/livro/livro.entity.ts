import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autor } from "../autor/autor.entity";

@Entity()
export class Livro {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:200})
    name: string;

    @ManyToOne(type => Autor, autor => autor.livros)
    autor: Autor

}