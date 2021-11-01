import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Grid, GridDocument } from './grid.schema';

@Injectable()
export class GridService {
  constructor(
    @InjectModel(Grid.name) private readonly gridModel: Model<GridDocument>,
  ) {}

  async create(entity: Omit<Grid, 'id'>) {
    return this.gridModel.create(entity);
  }

  async getAll() {
    return this.gridModel.find().exec();
  }

  async getById(id: string) {
    return this.gridModel.findOne({
      id,
    });
  }

  async updateById(id: string, partialEntity: Partial<Omit<Grid, 'id'>>) {
    return this.gridModel.findByIdAndUpdate(id, partialEntity, { new: true });
  }
}
