import { Module } from "@nestjs/common";
import { ConfigServiceModule } from "../config/config-service.module";
import { LivroController } from "./livro/livro.controller";

@Module({
    imports: [ConfigServiceModule.register()],
    controllers: [LivroController]
})
export class ControllerModule{}