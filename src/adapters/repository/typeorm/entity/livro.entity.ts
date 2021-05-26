import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AutorEntity } from "./autor.entity";

@Entity()
export class LivroEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:200})
    name: string;

    @ManyToOne(type => AutorEntity, autor => autor.livros, { cascade: ['insert'], eager: true })
    autor: AutorEntity
}