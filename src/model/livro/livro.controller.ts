import { Body, Controller, Get, Post } from "@nestjs/common";
import { Livro } from "./livro.entity";
import { LivroService } from "./livro.service";

@Controller('livro')
export class LivroController {

    constructor(private livroService: LivroService){}

    @Get()
    public findAll(): Promise<Livro[]>{
        return this.livroService.findAll()
    }

    @Post()
    public createLivro(@Body() livro: Livro): Promise<Livro>{
        return this.livroService.insert(livro)
    }

}