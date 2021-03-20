import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhotoDocument = Photo & Document;

@Schema()
export class Photo {
  @Prop()
  id: string;

  @Prop()
  description: number;

  @Prop()
  photoLink: string;
}

export const PhotosSchema = SchemaFactory.createForClass(Photo);