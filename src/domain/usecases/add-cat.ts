import { CatModel } from '../models/cat';

export const ADD_CAT = 'ADD_CAT';

export interface AddCat {
  execute: (cat: AddCat.Params) => Promise<AddCat.Result>;
}

export namespace AddCat {
  export type Params = {
    name: string;
    age: number;
    breed: string;
  };

  export type Result = CatModel;
}
