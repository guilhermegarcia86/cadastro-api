import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database.module';
import { LivroController } from './livro.controller';
import { livroProviders } from './livro.providers';
import { LivroService } from './livro.service';


@Module({
    imports: [DatabaseModule],
    controllers: [LivroController],
    providers: [
        ...livroProviders,
        LivroService,
    ],
})
export class LivroModule{}