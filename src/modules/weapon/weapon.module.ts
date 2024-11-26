import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponController } from './weapon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weapon } from './entities/weapon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Weapon])],
  controllers: [WeaponController],
  providers: [WeaponService],
})
export class WeaponModule {}
