import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsMongoId } from 'class-validator';
import { Grid } from './grid.schema';

export class CreateGridDTO implements Grid {
  @IsString()
  @ApiProperty()
  board: string;
}

export class UpdateGridDTO extends PartialType(CreateGridDTO) {}

export class GridDTO extends CreateGridDTO {
  @IsMongoId()
  @ApiProperty()
  _id: string;
}
