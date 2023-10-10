import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { CatsController } from './cats.controller';

import { CatsModule } from './modules/cats.module';
import { AppService } from './app.service';
// import { CatsService } from './cats.service';
import { CarModule } from './car/car.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [CatsModule, CarModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
