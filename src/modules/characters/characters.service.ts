import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { UsersService } from '../users/users.service';
import { Status } from '../status/entities/status.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
    @InjectRepository(Status)
    private statusRepository: Repository<Status>
  ) { }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const defaultStatus = this.statusRepository.create({
      health: 100,
      maxHealth: 100,
      healthRegen: 2,
      mana: 100,
      maxMana: 100,
      manaRegen: 2,
      strength: 1,
      dexterity: 1,
      wisdom: 1,
      damage: 4,
      maxDamage: 10,
      attackSpeed: 2,
      meleeDefence: 2,
      magicDefence: 2,
      evasion: 2,
      criticalDamage: 2,
      charisma: 1,
      constitution: 1,
      intelligence: 1,
    });

    const status = await this.statusRepository.save(defaultStatus);

    const character = this.characterRepository.create({
      ...createCharacterDto,
      imagem_url: "",
      experienceNextLevel: 10,
      totalAttributePoints: 0,
      availableAttributePoints: 3,
      coins: 100,
      experience: 0,
      level: 1,
      status,
    });
    return await this.characterRepository.save(character);
  }

  findAll() {    
    return this.characterRepository.find();
  }

  async findOne(id: number): Promise<Character> {
    const char = await this.characterRepository.findOne({
      where: { id },
      relations: ['status']
    });
    if(char == null){
      throw new NotFoundException("Personagem não encontrado.")
    }
    console.log("char", char)
    return char
  }

  async findByUserId(userId: number): Promise<Character[]> {
    return await this.characterRepository.find({
      where: { user: { id: userId } },
      relations: ['user']
    });
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.characterRepository.update(id, updateCharacterDto);
  }

  remove(id: number) {
    return this.characterRepository.delete(id);
  }
}
