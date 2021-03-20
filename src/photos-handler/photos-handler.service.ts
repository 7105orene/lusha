import { Injectable } from '@nestjs/common';
import { PhotosDal } from 'src/common/dal/photos.dal';
import { PhotosDto } from './dto/photos.dto';
import { v4 as uuidv4 } from 'uuid';
import { DbService } from 'src/db/db.service';

@Injectable()
export class PhotosHandlerService {

    constructor(private readonly dbService: DbService) {}

    public async getPhotosLink(photoId: string|'*'): Promise<string[]> {
        let photosArray: PhotosDal[] = [];

        if (photoId === '*') {
            photosArray = await this.dbService.getAllPhotos();
        } else {
            photosArray.push(await this.dbService.getPhotoById(photoId));
        }

        return photosArray.map((photoObj: PhotosDal) => photoObj.photoLink);
    }

    public async setPhoto(photoDto: PhotosDto): Promise<string> {
        let generatedId: string = uuidv4();
        let photoDal: PhotosDal = new PhotosDal(generatedId, photoDto.description, photoDto.photoLink);

        await this.dbService.upsertPhoto(photoDal);

        return generatedId;
    }

    public async editPhoto(photoId: string, photoDto: PhotosDto): Promise<void> {   
        const photo: PhotosDal = await this.dbService.getPhotoById(photoId);
        if (!photo) {
            throw new Error();
        }

        const photoWithNewValues: PhotosDal = new PhotosDal(photoId, photoDto.description, photoDto.photoLink);
        
        await this.dbService.upsertPhoto(photoWithNewValues);
    }

    public async deletePhoto(photoId: string) {        
        await this.dbService.deletePhoto(photoId);
    }


}
