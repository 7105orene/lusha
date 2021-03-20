import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { PhotosDto } from './dto/photos.dto';
import { PhotosHandlerService } from './photos-handler.service';
@Controller('photos')
export class PhotosHandlerController {

    constructor(private readonly photosHandlerService: PhotosHandlerService) {

    }

    @Get('get/:photoId')
    @HttpCode(200)
    public async getPhotos(@Param('photoId') photoId: string | '*'): Promise<string[]> {
        try {
            return await this.photosHandlerService.getPhotosLink(photoId);
        }
        catch (err) {
            throw new Error();
        }
    }

    @Post('set')
    @HttpCode(200)
    public async setNewPhoto(@Body() photo: PhotosDto): Promise<string> {
        try {
            return await this.photosHandlerService.setPhoto(photo);
        }
        catch (err) {
            throw new Error();
        }
    }

    @Put('set/:photoId')
    @HttpCode(200)
    public async editPhoto(@Param('photoId') photoId: string, @Body() photo: PhotosDto): Promise<void> {
        try {
            await this.photosHandlerService.editPhoto(photoId, photo);
        }
        catch (err) {
            throw new Error();
        }
    }

    @Delete('delete/:photoId')
    @HttpCode(200)
    public async deletePhoto(@Param('photoId') photoId: string): Promise<void> {
        try {
            await this.photosHandlerService.deletePhoto(photoId);
        }
        catch (err) {
            throw new Error();
        }
    }
}

