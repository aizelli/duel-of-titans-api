import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipmentSlotDto } from './create-equipment-slot.dto';

export class UpdateEquipmentSlotDto extends PartialType(CreateEquipmentSlotDto) {}
