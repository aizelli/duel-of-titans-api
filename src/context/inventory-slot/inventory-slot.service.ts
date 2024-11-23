import { Injectable } from '@nestjs/common';
import { CreateInventorySlotDto } from './dto/create-inventory-slot.dto';
import { UpdateInventorySlotDto } from './dto/update-inventory-slot.dto';

@Injectable()
export class InventorySlotService {
  create(createInventorySlotDto: CreateInventorySlotDto) {
    return 'This action adds a new inventorySlot';
  }

  findAll() {
    return `This action returns all inventorySlot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventorySlot`;
  }

  update(id: number, updateInventorySlotDto: UpdateInventorySlotDto) {
    return `This action updates a #${id} inventorySlot`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventorySlot`;
  }
}
