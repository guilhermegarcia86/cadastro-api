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
        const livroToSave: LivroEntity = this.mapToLivroEntity(livro);

        this.logger.log(`Livro pra salvar nome: ${livroToSave.name}`)
        this.logger.log(`Autor pra salvar nome: ${livroToSave.autor.name}`)

        const livroSaved: LivroEntity = await this.livroEntityRepository.save(livroToSave);

        this.logger.log(`Livro salvo id: ${livroSaved.id}`)
        this.logger.log(`Livro salvo nome: ${livroSaved.name}`)
        this.logger.log(`Livro salvo autor: ${livroSaved.autor}`)

        const livroReturn: Livro = this.mapToLivro(livroSaved)

        return livroReturn;
    }

    async findAll(): Promise<Livro[]> {

        const livroEntityArray: LivroEntity[] = await this.livroEntityRepository.find();

        const livroArray: Livro[] = livroEntityArray.map((livroEntity) => {
            return this.mapToLivro(livroEntity)
        });

        return livroArray;
    }

    private mapToLivroEntity(livro: Livro): LivroEntity {
        let livroEntity: LivroEntity = new LivroEntity();
        livroEntity.name = livro.name

        let autorEntity = new AutorEntity()
        autorEntity.name = livro.autor.name
        autorEntity.id = Number(livro.autor.id)

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