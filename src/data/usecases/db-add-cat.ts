import { Inject, Injectable } from '@nestjs/common';
import { AddCat } from 'src/domain/usecases/add-cat';
import {
  AddCatRepository,
  ADD_CAT_REPOSITORY,
} from '../protocols/add-cat-repository';

@Injectable()
export class DbAddCat implements AddCat {
  constructor(
    @Inject(ADD_CAT_REPOSITORY)
    private readonly addCatRepository: AddCatRepository,
  ) {}

  execute(catData: AddCat.Params): Promise<AddCat.Result> {
    return this.addCatRepository.add(catData);
  }
}
