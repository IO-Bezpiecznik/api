import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IdDTO } from '../../common/id-dto';
import { CodeDTO, CreateCodeDTO, UpdateCodeDTO } from './code.dto';
import { CodeService } from './code.service';

@ApiTags('Kody')
@Controller('/code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  @ApiOperation({
    description: 'Tworzenie nowego kodu',
  })
  @ApiCreatedResponse({
    type: CodeDTO,
  })
  createCode(@Body() codeDto: CreateCodeDTO) {
    return this.codeService.create(codeDto);
  }

  @Get()
  @ApiOperation({
    description: 'Pobieranie listy wszystkich kodów',
  })
  @ApiOkResponse({
    type: [CodeDTO],
  })
  getAllCodes() {
    return this.codeService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Pobieranie jednego kodu po jego ID',
  })
  @ApiOkResponse({
    type: CodeDTO,
  })
  getCodeById(@Param() { id }: IdDTO) {
    return this.codeService.getById(id);
  }

  @Post(':id')
  @ApiOperation({
    description: 'Aktualizowanie kodu po ID',
  })
  @ApiCreatedResponse({
    type: CodeDTO,
  })
  updateCodeById(@Param() { id }: IdDTO, @Body() codeDto: UpdateCodeDTO) {
    return this.codeService.updateById(id, codeDto);
  }
}
