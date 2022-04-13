import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCatRepository } from 'src/data/protocols/add-cat-repository';
import { FindCatRepository } from 'src/data/protocols/find-cat-repository';
import { Repository } from 'typeorm';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class CatsRepository implements AddCatRepository, FindCatRepository {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async add(
    catData: AddCatRepository.Params,
  ): Promise<AddCatRepository.Result> {
    const cat = await this.catsRepository.save(
      this.catsRepository.create(catData),
    );

    return cat;
  }

  async find(
    data: FindCatRepository.Params,
  ): Promise<FindCatRepository.Result> {
    const { id } = data;
    const cat = await this.catsRepository.findOne({ id });

    return cat;
  }
}
