import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeOrmConfig';
import { UsersModule } from './context/users/users.module';
import { CharactersModule } from './context/characters/characters.module';
import { StatusModule } from './context/status/status.module';
import { ItemModule } from './context/item/item.module';
import { InventorySlotModule } from './context/inventory-slot/inventory-slot.module';
import { EquipmentSlotModule } from './context/equipment-slot/equipment-slot.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    UsersModule, CharactersModule, StatusModule, ItemModule, InventorySlotModule, EquipmentSlotModule
  ]
})
export class AppModule { }
