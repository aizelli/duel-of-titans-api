import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status } from './entities/status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageAttributesUtil } from 'util/manageAttributes.util';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status])],
  controllers: [StatusController],
  providers: [StatusService, ManageAttributesUtil],
  exports: [TypeOrmModule]
})
export class StatusModule { }
