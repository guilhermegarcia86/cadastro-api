import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database.module';
import { livroProviders } from './livro.providers';
import { LivroRepositoryAdapter } from './livro_repository.adapter';


@Module({
    imports: [DatabaseModule],
    providers: [
        ...livroProviders,
        LivroRepositoryAdapter
    ],
})
export class LivroRepositoryModule{}