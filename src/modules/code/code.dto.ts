import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsString } from 'class-validator';
import { Grid } from '../grid/grid.schema';
import { Code } from './code.schema';

export class CreateCodeDTO implements Code {
  grid: Grid;

  @IsMongoId()
  @ApiProperty()
  gridId: string;

  @IsNumber()
  @ApiProperty()
  points: number;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  pattern: string;
}

export class UpdateCodeDTO extends PartialType(CreateCodeDTO) {}

export class CodeDTO extends CreateCodeDTO {
  @IsMongoId()
  @ApiProperty()
  _id: string;
}
