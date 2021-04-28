import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiBooksModule } from '@sct/api/books';

@Module({
  imports: [ApiBooksModule],
  controllers: [AppController]
})
export class AppModule {}
