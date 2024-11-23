import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentSlotService } from './equipment-slot.service';
import { CreateEquipmentSlotDto } from './dto/create-equipment-slot.dto';
import { UpdateEquipmentSlotDto } from './dto/update-equipment-slot.dto';

@Controller('equipment-slot')
export class EquipmentSlotController {
  constructor(private readonly equipmentSlotService: EquipmentSlotService) {}

  @Post()
  create(@Body() createEquipmentSlotDto: CreateEquipmentSlotDto) {
    return this.equipmentSlotService.create(createEquipmentSlotDto);
  }

  @Get()
  findAll() {
    return this.equipmentSlotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentSlotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentSlotDto: UpdateEquipmentSlotDto) {
    return this.equipmentSlotService.update(+id, updateEquipmentSlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentSlotService.remove(+id);
  }
}
