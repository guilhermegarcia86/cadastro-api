import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ConfigServiceModule } from "src/application/config/config-service.module";
import { Livro } from "src/domain/livro/livro";
import { CreateLivroService } from "src/usecase/create-livro-service";
import { FindAllLivroService } from "src/usecase/find-all-livro-service";

@Controller('livro')
export class LivroController {

    constructor(@Inject(ConfigServiceModule.CREATE_LIVRO_SERVICE) private readonly createLivroService: CreateLivroService,
                @Inject(ConfigServiceModule.FIND_ALL_LIVRO_SERVICE) private readonly findAllLivroService: FindAllLivroService){}

    @Get()
    public findAll(): Promise<Livro[]>{
        return this.findAllLivroService.findAll()
    }

    @Post()
    public createLivro(@Body() livro: Livro): Promise<Livro>{
        return this.createLivroService.create(livro)
    }

}