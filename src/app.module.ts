import { Module } from '@nestjs/common';
import { LivroModule } from './model/livro/livro.module';

@Module({
  imports: [LivroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
