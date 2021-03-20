import { Test, TestingModule } from '@nestjs/testing';
import { PhotosHandlerController } from './photos-handler.controller';

describe('PhotosHandlerController', () => {
  let controller: PhotosHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotosHandlerController],
    }).compile();

    controller = module.get<PhotosHandlerController>(PhotosHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
