import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>
  ) { }
  
  create(createCharacterDto: CreateCharacterDto) {
    return this.characterRepository.save(createCharacterDto);
  }

  findAll() {
    return this.characterRepository.find();
  }

  async findOne(id: number): Promise<Character> {
    return await this.characterRepository.findOne({
      where: {id},
      relations: ['status']
    });
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.characterRepository.update(id, updateCharacterDto);
  }

  remove(id: number) {
    return this.characterRepository.delete(id);
  }
}
