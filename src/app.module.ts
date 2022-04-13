import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './infra/database/entities/cat.entity';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '252525',
      database: 'postgres',
      entities: [Cat],
      synchronize: true,
      logging: true,
    }),
    PresentationModule,
  ],
})
export class AppModule {}
