import { Injectable } from '@nestjs/common';
import { PhotosDal } from 'src/common/dal/photos.dal';

@Injectable()
export class DbService {
    constructor() {}

    public async getAllPhotos(): Promise<PhotosDal[]> {
        // await get all photos and return them
        return []; //to avoid compilation error
    }

    public async getPhotoById(photoId: string): Promise<PhotosDal> {
        // await get photo and return it

        return new PhotosDal('1', '2', '3'); //to avoid compilation error
    }

    public async upsertPhoto(photoObj: PhotosDal): Promise<void> {
        //upsert photo
    }

    public async deletePhoto(photoId: string): Promise<void> {
        //delete photo by id
    }
}
