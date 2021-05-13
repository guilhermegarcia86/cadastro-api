import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provide';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}