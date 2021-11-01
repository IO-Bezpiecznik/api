import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';
import { Grid } from '../grid/grid.schema';

export type CodeDocument = Code & Document;

@Schema()
export class Code {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => Grid })
  grid: Grid;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  pattern: string;
}

export const CodeSchema = SchemaFactory.createForClass(Code);
