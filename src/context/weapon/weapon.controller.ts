import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Post()
  create(@Body() createWeaponDto: CreateWeaponDto) {
    return this.weaponService.create(createWeaponDto);
  }

  @Get()
  findAll() {
    return this.weaponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weaponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeaponDto: UpdateWeaponDto) {
    return this.weaponService.update(+id, updateWeaponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weaponService.remove(+id);
  }
}
