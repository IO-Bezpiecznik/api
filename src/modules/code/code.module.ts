import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeController } from './code.controller';
import { Code, CodeSchema } from './code.schema';
import { CodeService } from './code.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Code.name, schema: CodeSchema }]),
  ],
  controllers: [CodeController],
  providers: [CodeService],
})
export class CodeModule {}
