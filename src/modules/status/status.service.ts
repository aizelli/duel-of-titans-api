import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
import { ManageAttributesUtil } from 'util/manageAttributes.util';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    private manageAttributes: ManageAttributesUtil,
  ) { }

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    return await this.statusRepository.save(createStatusDto);
  }

  findAll() {
    return this.statusRepository.find();
  }

  findOne(id: number) {
    return this.statusRepository.findOneBy({ id: id });
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    const newStatus = this.manageAttributes.updateAttributes(updateStatusDto)
    return this.statusRepository.update(id, newStatus);
  }

  remove(id: number) {
    return this.statusRepository.delete(id);
  }
}
