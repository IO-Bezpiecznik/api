import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class IdDTO {
  @IsMongoId()
  @ApiProperty()
  id: string;
}
