import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CodeModule } from './modules/code/code.module';
import { GridModule } from './modules/grid/grid.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),
    GridModule,
    CodeModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
