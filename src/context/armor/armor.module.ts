import { Module } from '@nestjs/common';
import { ArmorService } from './armor.service';
import { ArmorController } from './armor.controller';

@Module({
  controllers: [ArmorController],
  providers: [ArmorService],
})
export class ArmorModule {}
