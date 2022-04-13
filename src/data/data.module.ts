import { Module } from '@nestjs/common';
import { ADD_CAT } from 'src/domain/usecases/add-cat';
import { FIND_CAT } from 'src/domain/usecases/find-cat';
import { InfraModule } from 'src/infra/infra.module';
import { DbAddCat } from './usecases/db-add-cat';
import { DbFindCat } from './usecases/db-find-cat';

@Module({
  exports: [ADD_CAT, FIND_CAT],
  imports: [InfraModule],
  providers: [
    { provide: ADD_CAT, useClass: DbAddCat },
    { provide: FIND_CAT, useClass: DbFindCat },
  ],
})
export class DataModule {}
