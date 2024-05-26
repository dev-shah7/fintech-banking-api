import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop()
  name: string;

  @Prop()
  phone_number: string;

  @Prop({ default: Date.now })
  registration_date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
