import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroController } from './hero/hero.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HeroController],
  providers: [AppService],
})
export class AppModule {}
