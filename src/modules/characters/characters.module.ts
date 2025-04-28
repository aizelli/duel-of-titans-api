import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { StatusModule } from '../status/status.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]),
    StatusModule],
  controllers: [CharactersController],
  providers: [CharactersService],
  exports: [TypeOrmModule, CharactersService]
})
export class CharactersModule { }
