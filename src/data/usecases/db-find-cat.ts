import { Inject, Injectable } from '@nestjs/common';
import { FindCat } from 'src/domain/usecases/find-cat';
import {
  FindCatRepository,
  FIND_CAT_REPOSITORY,
} from '../protocols/find-cat-repository';

@Injectable()
export class DbFindCat implements FindCat {
  constructor(
    @Inject(FIND_CAT_REPOSITORY)
    private readonly addCatRepository: FindCatRepository,
  ) {}

  async execute(catData: FindCat.Params): Promise<FindCat.Result> {
    const cat = await this.addCatRepository.find(catData);

    if (!cat) return null;

    return cat;
  }
}
