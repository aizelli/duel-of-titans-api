import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status } from './entities/status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '../characters/entities/character.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status, Character])],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
