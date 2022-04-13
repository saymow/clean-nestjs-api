import { AddCat } from 'src/domain/usecases/add-cat';
import { CatModel } from 'src/domain/models/cat';

export const ADD_CAT_REPOSITORY = 'ADD_CAT_REPOSITORY';

export interface AddCatRepository {
  add: (catData: AddCatRepository.Params) => Promise<AddCatRepository.Result>;
}

export namespace AddCatRepository {
  export type Params = AddCat.Params;
  export type Result = CatModel;
}
