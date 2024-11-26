import { Injectable } from '@nestjs/common';
import { CreateEquipmentSlotDto } from './dto/create-equipment-slot.dto';
import { UpdateEquipmentSlotDto } from './dto/update-equipment-slot.dto';

@Injectable()
export class EquipmentSlotService {
  create(createEquipmentSlotDto: CreateEquipmentSlotDto) {
    return 'This action adds a new equipmentSlot';
  }

  findAll() {
    return `This action returns all equipmentSlot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipmentSlot`;
  }

  update(id: number, updateEquipmentSlotDto: UpdateEquipmentSlotDto) {
    return `This action updates a #${id} equipmentSlot`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipmentSlot`;
  }
}
