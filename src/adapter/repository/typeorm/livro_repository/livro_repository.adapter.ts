import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Livro } from "src/adapter/repository/typeorm/entity/livro.entity";
import { LivroUseCase } from "src/domain/usecases/livro/port/livro_usecase.interface";
import { Repository } from "typeorm";

@Injectable()
export class LivroRepositoryAdapter implements LivroUseCase{

    constructor(@Inject('LIVRO_REPOSITORY') private livroRepository: Repository<Livro>){}
    
    async save(livro: Livro): Promise<Livro> {
        return this.livroRepository.save(livro)
    }
    async findAll(): Promise<Livro[]> {
        return this.livroRepository.find()
    }

}