import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IdDTO } from 'src/common/id-dto';
import { CreateGridDTO, GridDTO, UpdateGridDTO } from './grid.dto';
import { GridService } from './grid.service';

@ApiTags('Siatka')
@Controller('/grid')
export class GridController {
  constructor(private readonly gridService: GridService) {}

  @Post()
  @ApiOperation({
    description: 'Tworzenie nowej siatki',
  })
  @ApiCreatedResponse({
    type: GridDTO,
  })
  createGrid(@Body() gridDto: CreateGridDTO) {
    return this.gridService.create(gridDto);
  }

  @Get()
  @ApiOperation({
    description: 'Pobieranie listy wszystkich siatek',
  })
  @ApiOkResponse({
    type: [GridDTO],
  })
  getAllGrids() {
    return this.gridService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Pobieranie jednej siatki po jej ID',
  })
  @ApiOkResponse({
    type: GridDTO,
  })
  getGridById(@Param() { id }: IdDTO) {
    return this.gridService.getById(id);
  }

  @Post(':id')
  @ApiOperation({
    description: 'Aktualizowanie siatki po ID',
  })
  @ApiCreatedResponse({
    type: GridDTO,
  })
  updateGridById(@Param() { id }: IdDTO, @Body() codeDto: UpdateGridDTO) {
    return this.gridService.updateById(id, codeDto);
  }
}
