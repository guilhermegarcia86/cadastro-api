import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Livro } from "./livro.entity";

@Injectable()
export class LivroService {

    constructor(@Inject('LIVRO_REPOSITORY') private livroRepository: Repository<Livro>){}

    async insert(livro: Livro): Promise<Livro>{
        return this.livroRepository.save(livro)
    }

    async findAll(): Promise<Livro[]>{
        return this.livroRepository.find()
    }

}