import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá mundo! Deploy na Heroku integrado com o GitHub';
  }
}
