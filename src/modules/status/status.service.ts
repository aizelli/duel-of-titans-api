import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
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
    const newStatus = this.updateAttributes(updateStatusDto)
    return this.statusRepository.update(id, newStatus);
  }

  remove(id: number) {
    return this.statusRepository.delete(id);
  }

  updateAttributes(updateStatus: UpdateStatusDto) {
    const newDamages = this.balanceDamage(updateStatus.strength, updateStatus.wisdom)

    const newStatus: UpdateStatusDto = {
      maxHealth: Math.floor(100 * Math.pow(updateStatus.strength, 1.5)),
      healthRegen: Math.floor(1 * (Math.pow(updateStatus.strength, 1.3) + Math.pow(updateStatus.perception, 1.1))),
      maxMana: Math.floor(100 * Math.pow(updateStatus.wisdom, 1.5)),
      manaRegen: Math.floor(1 * (Math.pow(updateStatus.wisdom, 1.3) + Math.pow(updateStatus.perception, 1.1))),
      damage: newDamages.newdamage,
      maxDamage: newDamages.newMaxdamage,
      attackSpeed: Math.floor(1 * (Math.pow(updateStatus.dexterity, 1.3) + Math.pow(updateStatus.perception, 1.1))),
      meleeDefence: Math.floor(1 * (Math.pow(updateStatus.strength, 1.3) + Math.pow(updateStatus.perception, 1.1))),
      magicDefence: Math.floor(1 * (Math.pow(updateStatus.wisdom, 1.3) + Math.pow(updateStatus.perception, 1.1))),
      evasion: Math.floor(1 * (Math.pow(updateStatus.dexterity, 1.3) + Math.pow(updateStatus.perception, 1.2))),
      criticalDamage: Math.floor(0.5 + (Math.pow(updateStatus.dexterity, 1.1) + Math.pow(updateStatus.perception, 1.3))),
    }

    return newStatus
  }

  balanceDamage(strength: number, wisdom: number) {
    const maxMargin = 100;
    const baseDamage = Math.pow(strength, 1.3) + Math.pow(wisdom, 1.3);
    let damage = Math.floor(2 * baseDamage);
    let maxDamage = Math.floor(5 * baseDamage);

    if (maxDamage - damage > maxMargin) {
      maxDamage = damage + maxMargin;
    }
    return { newdamage: damage, newMaxdamage: maxDamage }
  }
}
