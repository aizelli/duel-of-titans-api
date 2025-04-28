import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcript from "bcrypt";
import { Character } from '../characters/entities/character.entity';
import { CharactersService } from '../characters/characters.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
    private charactersService: CharactersService
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hasdPassword = await bcript.hash(createUserDto.password, saltRounds);

    const user = this.userRepository.create(
      {
        ...createUserDto,
        password: hasdPassword
      }
    )
    return await this.userRepository.save(user);
  }

  async createUserWithCharacter(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hasdPassword = await bcript.hash(createUserDto.password, saltRounds);

    const user = this.userRepository.create(
      {
        ...createUserDto,
        password: hasdPassword
      }
    )
    const savedUser =  await this.userRepository.save(user);

    await this.charactersService.create({
      name: savedUser.name,
      user: savedUser
    });

    return savedUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email: email });
  }

  async findByEmailWithCharacter(email: string) {
    const user = await this.userRepository.findOne({ where: { email: email } });

    const character = await this.characterRepository.findOne(
      { where: { user: { id: user.id } } }
    );

    return { ...user, characterId: character?.id ?? null }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
