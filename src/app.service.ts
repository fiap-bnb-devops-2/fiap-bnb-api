import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá mundo, estamos configurando um projeto NestJS';
  }
}
