import { PartialType } from '@nestjs/mapped-types';
import { CreateInventorySlotDto } from './create-inventory-slot.dto';

export class UpdateInventorySlotDto extends PartialType(CreateInventorySlotDto) {}
