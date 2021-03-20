import { ApiProperty } from '@nestjs/swagger';
import { PhotosDal } from 'src/common/dal/photos.dal';

export class PhotosDto {
    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly photoLink: string;

    static fromDal(photoDal: PhotosDal): PhotosDto {
        let photoDto: PhotosDto = {
            description: photoDal.description,
            photoLink: photoDal.photoLink
        }

        return photoDto;
    }
}
