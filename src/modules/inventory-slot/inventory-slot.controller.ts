import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventorySlotService } from './inventory-slot.service';
import { CreateInventorySlotDto } from './dto/create-inventory-slot.dto';
import { UpdateInventorySlotDto } from './dto/update-inventory-slot.dto';

@Controller('inventory-slot')
export class InventorySlotController {
  constructor(private readonly inventorySlotService: InventorySlotService) {}

  @Post()
  create(@Body() createInventorySlotDto: CreateInventorySlotDto) {
    return this.inventorySlotService.create(createInventorySlotDto);
  }

  @Get()
  findAll() {
    return this.inventorySlotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventorySlotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventorySlotDto: UpdateInventorySlotDto) {
    return this.inventorySlotService.update(+id, updateInventorySlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventorySlotService.remove(+id);
  }
}
