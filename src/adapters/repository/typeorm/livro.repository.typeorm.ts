import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Autor } from "src/domain/autor/autor";
import { Livro } from "src/domain/livro/livro";
import { LivroRepository } from "src/domain/ports/livro.repository";
import { Repository } from "typeorm";
import { AutorEntity } from "./entity/autor.entity";
import { LivroEntity } from "./entity/livro.entity";

@Injectable()
export default class LivroRepositoryTypeORM implements LivroRepository {

    private readonly logger = new Logger(LivroRepositoryTypeORM.name);

    constructor(@InjectRepository(LivroEntity) private readonly livroEntityRepository: Repository<LivroEntity>){}

    async save(livro: Livro): Promise<Livro> {

        const livroEntity: LivroEntity = this.mapToLivroEntity(livro)

        const livroSaved: LivroEntity = await this.livroEntityRepository.save(livroEntity)

        return this.mapToLivro(livroSaved)
    }

    async findAll(): Promise<Livro[]> {

        const livroEntityArray: LivroEntity[] = await this.livroEntityRepository.find()

        const livroArray: Livro[] = livroEntityArray.map((livroEntity) => {
            return this.mapToLivro(livroEntity)
        });

        return livroArray;
    }

    private mapToLivroEntity(livro: Livro): LivroEntity {
        let livroEntity: LivroEntity = new LivroEntity();
        livroEntity.name = livro.name

        let autorEntity = new AutorEntity()
        if(!!livro.autor.id){
            autorEntity.id = Number(livro.autor.id)
        }
        autorEntity.name = livro.autor.name

        livroEntity.autor = autorEntity

        return livroEntity
    }

    private mapToLivro(livroEntity: LivroEntity): Livro{
        let livro: Livro = new Livro()
        
        livro.name = livroEntity.name

        let autor: Autor = new Autor()

        autor.name = livroEntity.autor.name

        livro.autor = autor

        return livro
    }
    
}