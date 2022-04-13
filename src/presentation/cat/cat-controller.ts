import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AddCat, ADD_CAT } from '../../domain/usecases/add-cat';
import { FindCat, FIND_CAT } from '../../domain/usecases/find-cat';
import { AddCatDTO } from './add-cat.dto';

@Controller('cat')
export class CatController {
  constructor(
    @Inject(ADD_CAT)
    private readonly addCat: AddCat,
    @Inject(FIND_CAT)
    private readonly findCat: FindCat,
  ) {}

  @Get(':id')
  async getCat(@Param('id', ParseIntPipe) id: number) {
    const cat = await this.findCat.execute({ id });

    if (!cat) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return cat;
  }

  @Post()
  async createCat(@Body() body: AddCatDTO) {
    return await this.addCat.execute(body);
  }
}
