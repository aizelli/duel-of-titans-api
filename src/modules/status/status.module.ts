import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status } from './entities/status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageAttributes } from 'util/manageAttributes';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status])],
  controllers: [StatusController],
  providers: [StatusService, ManageAttributes],
  exports: [TypeOrmModule]
})
export class StatusModule { }
