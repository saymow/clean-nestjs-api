import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { CatController } from './cat/cat-controller';

@Module({
  imports: [DataModule],
  controllers: [CatController],
})
export class PresentationModule {}
