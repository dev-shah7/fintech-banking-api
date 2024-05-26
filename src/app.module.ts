import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionService } from './connection/connection.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConnectionService],
})
export class AppModule {}
