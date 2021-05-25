import { Livro } from "src/domain/livro/livro";
import { LivroRepository } from "src/domain/ports/livro.repository";

export class CreateLivroService{
    constructor(private readonly repository: LivroRepository){}

    async create(livroDTO: Livro): Promise<Livro>{
        return this.repository.save(livroDTO)
    }
}