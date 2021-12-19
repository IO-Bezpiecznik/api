import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateCodeDTO } from './code.dto';
import { Code, CodeDocument } from './code.schema';

@Injectable()
export class CodeService {
  constructor(
    @InjectModel(Code.name) private readonly codeModel: Model<CodeDocument>,
  ) {}

  async create(entity: CreateCodeDTO) {
    const newCode = await this.codeModel.create({
      ...entity,
      grid: new Types.ObjectId(entity.gridId),
    });
    return newCode.populate('grid');
  }

  async getAll() {
    return this.codeModel.find().populate('grid').exec();
  }

  async getById(id: string) {
    return this.codeModel.findById(id).populate('grid').exec();
  }

  async updateById(id: string, partialEntity: Partial<Code>) {
    return this.codeModel
      .findByIdAndUpdate(id, partialEntity, { new: true })
      .populate('grid');
  }
}
