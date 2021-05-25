import { Livro } from "src/domain/livro/livro";
import { LivroRepository } from "src/domain/ports/livro.repository";

export class FindAllLivroService{
    constructor(private readonly repository: LivroRepository){}

    async findAll(): Promise<Livro[]>{
        return this.repository.findAll()
    }
}