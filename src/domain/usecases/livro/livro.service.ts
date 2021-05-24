import { Inject, Injectable } from "@nestjs/common";
import { LivroUseCase, LIVRO_USECASE } from "src/domain/usecases/livro/port/livro_usecase.interface";
import { Livro } from "../../../adapter/repository/typeorm/entity/livro.entity";

@Injectable()
export class LivroService {

    constructor(@Inject(LIVRO_USECASE) private livroRepository: LivroUseCase){}

    async insert(livro: Livro): Promise<Livro>{
        return this.livroRepository.save(livro)
    }

    async findAll(): Promise<Livro[]>{
        return await this.livroRepository.findAll();
    }

}