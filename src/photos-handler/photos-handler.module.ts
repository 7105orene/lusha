import { Module } from '@nestjs/common';
import { PhotosHandlerController } from './photos-handler.controller';
import { PhotosHandlerService } from './photos-handler.service';

@Module({
  controllers: [PhotosHandlerController],
  providers: [PhotosHandlerService]
})
export class PhotosHandlerModule {}
