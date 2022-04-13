import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ADD_CAT_REPOSITORY } from 'src/data/protocols/add-cat-repository';
import { FIND_CAT_REPOSITORY } from 'src/data/protocols/find-cat-repository';
import { Cat } from './database/entities/cat.entity';
import { CatsRepository } from './database/repositories/cat-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  exports: [ADD_CAT_REPOSITORY, FIND_CAT_REPOSITORY],
  providers: [
    { provide: ADD_CAT_REPOSITORY, useClass: CatsRepository },
    { provide: FIND_CAT_REPOSITORY, useClass: CatsRepository },
  ],
})
export class InfraModule {}
