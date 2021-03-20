import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosHandlerModule } from './photos-handler/photos-handler.module';
import { DbService } from './db/db.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PhotosHandlerModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
