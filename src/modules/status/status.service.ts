import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
import { Character } from '../characters/entities/character.entity';
import { error } from 'console';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    @InjectRepository(Character)
    private characterRepository: Repository<Character>
  ) { }

  async create(createStatusDto: CreateStatusDto): Promise<Status>{
    const characters : Character  = await this.characterRepository.findOneBy({
      id: createStatusDto.charactersId,
    });
    if(!characters){
      throw new Error('Personagem não encontrado');
    }
    const status : Status = this.statusRepository.create({
      ...createStatusDto, characters,
    });
    return this.statusRepository.save(status);
  }

  findAll() {
    return this.statusRepository.find();
  }

  findOne(id: number) {
    return this.statusRepository.findOneBy({id: id});
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.statusRepository.update(id, updateStatusDto);
  }

  remove(id: number) {
    return this.statusRepository.delete(id);
  }
}
