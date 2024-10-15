import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá mundo! Deploy automático com GitHub Actions!!!!!';
  }
}
