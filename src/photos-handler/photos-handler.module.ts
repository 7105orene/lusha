import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PhotosHandlerController } from './photos-handler.controller';
import { PhotosHandlerService } from './photos-handler.service';

@Module({
  controllers: [PhotosHandlerController],
  providers: [PhotosHandlerService, DbService]
})
export class PhotosHandlerModule {}
