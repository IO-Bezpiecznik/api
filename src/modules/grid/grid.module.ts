import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GridController } from './grid.controller';
import { Grid, GridSchema } from './grid.schema';
import { GridService } from './grid.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Grid.name, schema: GridSchema }]),
  ],
  controllers: [GridController],
  providers: [GridService],
})
export class GridModule {}
