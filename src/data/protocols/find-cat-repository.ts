import { CatModel } from 'src/domain/models/cat';
import { FindCat } from 'src/domain/usecases/find-cat';

export const FIND_CAT_REPOSITORY = 'FIND_CAT_REPOSITORY';

export interface FindCatRepository {
  find: (data: FindCatRepository.Params) => Promise<FindCatRepository.Result>;
}

export namespace FindCatRepository {
  export type Params = FindCat.Params;
  export type Result = CatModel;
}
