import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GridDocument = Grid & Document;

@Schema()
export class Grid {
  @Prop({ required: true })
  board: string;
}

export const GridSchema = SchemaFactory.createForClass(Grid);
