import { Injectable } from '@nestjs/common';
import { CreateExperienceLevelDto } from './dto/create-experience-level.dto';
import { UpdateExperienceLevelDto } from './dto/update-experience-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienceLevel } from './entities/experience-level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExperienceLevelsService {
  constructor(
    @InjectRepository(ExperienceLevel)
    private experienceLevelRepository: Repository<ExperienceLevel>
  ) { }

  create(createExperienceLevelDto: CreateExperienceLevelDto) {
    return this.experienceLevelRepository.save(createExperienceLevelDto);
  }

  findAll() {
    return this.experienceLevelRepository.find();
  }

  findOne(id: number) {
    return this.experienceLevelRepository.findOneBy({ id: id });
  }

  findOneByLevel(level: number) {
    return this.experienceLevelRepository.findOneBy({ level: level });
  }

  update(id: number, updateExperienceLevelDto: UpdateExperienceLevelDto) {
    return this.experienceLevelRepository.update(id, updateExperienceLevelDto);
  }

  remove(id: number) {
    return this.experienceLevelRepository.delete(id);
  }
}
