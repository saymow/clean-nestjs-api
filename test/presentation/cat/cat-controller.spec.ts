import { HttpException, HttpStatus } from '@nestjs/common';
import { CalledWithMock, mock } from 'jest-mock-extended';
import { CatModel } from '../../../src/domain/models/cat';
import { AddCat } from '../../../src/domain/usecases/add-cat';
import { FindCat } from '../../../src/domain/usecases/find-cat';
import { CatController } from '../../../src/presentation/cat/cat-controller';

type MockUseCase<T, Y, U> = {
  execute: CalledWithMock<Promise<U>, [cat: Y]>;
} & T;

const mockCat = (): CatModel => ({
  id: 5,
  age: 20,
  name: 'Garfield',
  breed: 'unknown',
});

type SutType = {
  controller: CatController;
  findCat: MockUseCase<FindCat, FindCat.Params, FindCat.Result>;
  addCat: MockUseCase<AddCat, AddCat.Params, AddCat.Result>;
};

const mockSut = (): SutType => {
  const findCat = mock<FindCat>();
  const addCat = mock<AddCat>();
  const controller = new CatController(addCat, findCat);

  findCat.execute.mockReturnValue(Promise.resolve(mockCat()));

  return { controller, findCat, addCat };
};

describe('CatController', () => {
  describe('getCat()', () => {
    it('Should call findCat with given id', async () => {
      const { controller, findCat } = mockSut();

      await controller.getCat(5);

      expect(findCat.execute).toHaveBeenCalledTimes(1);
      expect(findCat.execute).toHaveBeenCalledWith({ id: 5 });
    });

    it('Should throw NOT FOUND exception if findCat returns null', async () => {
      const { controller, findCat } = mockSut();

      findCat.execute.mockReturnValueOnce(Promise.resolve(null));

      await expect(controller.getCat(5)).rejects.toEqual(
        new HttpException('Not found', HttpStatus.NOT_FOUND),
      );
    });

    it('Should return Cat on findCat succeeds', async () => {
      const { controller } = mockSut();
      const cat = await controller.getCat(1);

      expect(cat).toEqual(mockCat());
    });
  });
});
