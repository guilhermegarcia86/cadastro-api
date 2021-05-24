import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Livro } from "src/domain/livro/livro";
import { LivroRepository } from "src/domain/ports/livro.repository";
import { Repository } from "typeorm";
import { LivroEntity } from "./entity/livro.entity";

@Injectable()
export default class LivroRepositoryTypeORM implements LivroRepository {

    constructor(@InjectRepository(LivroEntity) private readonly livroEntityRepository: Repository<LivroEntity>){}

    async save(livro: Livro): Promise<Livro> {
        //TODO criar métodos mapper
        const livroToSave: LivroEntity = null;

        const livroSaved: LivroEntity = await this.livroEntityRepository.save(livroToSave);

        //TODO criar mapper
        const livroReturn: Livro = null;

        return livroReturn;
    }

    async findAll(): Promise<Livro[]> {

        const livroEntityArray: LivroEntity[] = await this.livroEntityRepository.find();

        //TODO criar mapper
        const livroArray: Livro[] = null;

        return livroArray;
    }
    
}