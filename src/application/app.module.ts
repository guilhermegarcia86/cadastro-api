import { Module } from '@nestjs/common';
import { ControllerModule } from 'src/adapters/controller/rest/controller.module';

@Module({
  imports: [ControllerModule]
})
export class AppModule {}