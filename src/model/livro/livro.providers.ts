import { Connection } from "typeorm";
import { Livro } from "./livro.entity";

export const livroProviders = [
    {
        provide: 'LIVRO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Livro),
        inject: ['DATABASE_CONNECTION']
    }
]