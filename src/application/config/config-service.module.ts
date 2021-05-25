import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmConfigModule } from "src/adapters/repository/typeorm/config/typeorm-config.module";
import LivroRepositoryTypeORM from "src/adapters/repository/typeorm/livro.repository.typeorm";
import { CreateLivroService } from "src/usecase/create-livro-service";
import { FindAllLivroService } from "src/usecase/find-all-livro-service";

@Module({
    imports: [TypeOrmConfigModule]
})
export class ConfigServiceModule{

    static FIND_ALL_LIVRO_SERVICE: string = 'FindAllLivroService';
    static CREATE_LIVRO_SERVICE: string = 'CreateLivroService';
  
    static register(): DynamicModule {
        return {
            module: ConfigServiceModule,
            providers: [
                {
                    inject: [LivroRepositoryTypeORM],
                    provide: ConfigServiceModule.CREATE_LIVRO_SERVICE,
                    useFactory: (livroRepository: LivroRepositoryTypeORM) => new CreateLivroService(livroRepository)
                },
                {
                    inject: [LivroRepositoryTypeORM],
                    provide: ConfigServiceModule.FIND_ALL_LIVRO_SERVICE,
                    useFactory: (livroRepository: LivroRepositoryTypeORM) => new FindAllLivroService(livroRepository)
                }
            ],
            exports: [ConfigServiceModule.FIND_ALL_LIVRO_SERVICE, ConfigServiceModule.CREATE_LIVRO_SERVICE]
        }
    }
}