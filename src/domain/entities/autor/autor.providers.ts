import { Connection } from "typeorm";
import { Autor } from "./autor.entity";

export const autorProviders = [
    {
        provide: 'AUTOR_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Autor),
        inject: ['DATABASE_CONNECTION']
    }
]