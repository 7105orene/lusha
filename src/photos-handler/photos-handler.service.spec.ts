import { Test, TestingModule } from '@nestjs/testing';
import { PhotosHandlerService } from './photos-handler.service';

describe('PhotosHandlerService', () => {
  let service: PhotosHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotosHandlerService],
    }).compile();

    service = module.get<PhotosHandlerService>(PhotosHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
