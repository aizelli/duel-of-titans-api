import { Module } from '@nestjs/common';
import { InventorySlotService } from './inventory-slot.service';
import { InventorySlotController } from './inventory-slot.controller';
import { InventorySlot } from './entities/inventory-slot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventorySlot])],
  controllers: [InventorySlotController],
  providers: [InventorySlotService],
})
export class InventorySlotModule {}
