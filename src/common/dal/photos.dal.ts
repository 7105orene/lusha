import { ApiProperty } from '@nestjs/swagger';

export class PhotosDal {
    readonly id: string;
    readonly description: string;
    readonly photoLink: string;

    constructor(id: string, description: string, photoLink: string) {
        this.id = id;
        this.description = description;
        this.photoLink = photoLink;
    }
}