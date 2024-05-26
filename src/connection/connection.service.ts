import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class ConnectionService implements OnModuleInit {
  private readonly logger = new Logger(ConnectionService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.connection.on('connected', () => {
      this.logger.log('MongoDB connected successfully');
    });

    this.connection.on('disconnected', () => {
      this.logger.warn('MongoDB disconnected');
    });

    this.connection.on('error', (error) => {
      this.logger.error(
        `MongoDB connection error: ${error.message}`,
        error.stack,
      );
    });

    this.connection.on('reconnected', () => {
      this.logger.log('MongoDB reconnected');
    });
  }
}
