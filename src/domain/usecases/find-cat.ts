import { CatModel } from '../models/cat';

export const FIND_CAT = 'FIND_CAT';

export interface FindCat {
  execute: (cat: FindCat.Params) => Promise<FindCat.Result>;
}

export namespace FindCat {
  export type Params = {
    id: number;
  };

  export type Result = CatModel;
}
