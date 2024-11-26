import { Module } from '@nestjs/common';
import { EquipmentSlotService } from './equipment-slot.service';
import { EquipmentSlotController } from './equipment-slot.controller';
import { EquipmentSlot } from './entities/equipment-slot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([EquipmentSlot])],
  controllers: [EquipmentSlotController],
  providers: [EquipmentSlotService],
})
export class EquipmentSlotModule {}
