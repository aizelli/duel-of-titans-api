import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeOrmConfig';
import { UsersModule } from './modules/users/users.module';
import { CharactersModule } from './modules/characters/characters.module';
import { StatusModule } from './modules/status/status.module';
import { ItemModule } from './modules/item/item.module';
import { InventorySlotModule } from './modules/inventory-slot/inventory-slot.module';
import { EquipmentSlotModule } from './modules/equipment-slot/equipment-slot.module';
import { ExperienceLevelsModule } from './modules/experience-levels/experience-levels.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule, 
    CharactersModule, 
    StatusModule, 
    ItemModule, 
    InventorySlotModule, 
    EquipmentSlotModule,
    ExperienceLevelsModule
  ]
})
export class AppModule { }
