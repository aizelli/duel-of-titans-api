import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { ExperienceLevelsService } from './experience-levels.service';
import { CreateExperienceLevelDto } from './dto/create-experience-level.dto';
import { UpdateExperienceLevelDto } from './dto/update-experience-level.dto';
import { ExperienceLevel } from './entities/experience-level.entity';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { error } from 'console';

@Controller('experience-levels')
export class ExperienceLevelsController {
  constructor(private readonly experienceLevelsService: ExperienceLevelsService) { }

  @Post()
  @ApiOperation({ summary: 'Cria um novo level' })
  @ApiResponse({ status: 201, description: 'Level criado com sucesso.', type: ExperienceLevel, })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  async create(@Body() createExperienceLevelDto: CreateExperienceLevelDto): Promise<ExperienceLevel> {
    const newExperience = new CreateExperienceLevelDto();
    const existingLevel = await this.experienceLevelsService.findOneByLevel(createExperienceLevelDto.level);
    if (existingLevel) {
      throw new BadRequestException('O nível já existe.');
    }
    const levelMinus1 = await this.experienceLevelsService.findOneByLevel((createExperienceLevelDto.level - 1))
    const levelMinus2 = await this.experienceLevelsService.findOneByLevel((createExperienceLevelDto.level - 2))
    if (createExperienceLevelDto.level <= 2) {
      newExperience.level = createExperienceLevelDto.level
      newExperience.maxExperience = 100
    } else {
      newExperience.level = createExperienceLevelDto.level
      newExperience.maxExperience = (levelMinus1.maxExperience || 0) + (levelMinus2.maxExperience || 0)
    }
    return this.experienceLevelsService.create(newExperience);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os Leveis' })
  @ApiResponse({ status: 200, description: 'Lista de personagens retornada com sucesso.', type: [ExperienceLevel], })
  findAll() {
    return this.experienceLevelsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um level pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do level', example: 1 })
  @ApiResponse({ status: 200, description: 'Level retornado com sucesso.', type: ExperienceLevel, })
  @ApiResponse({ status: 404, description: 'Level não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.experienceLevelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um level pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do level', example: 1 })
  @ApiResponse({ status: 200, description: 'Level atualizado com sucesso.', type: ExperienceLevel, })
  @ApiResponse({ status: 404, description: 'Level não encontrado.' })
  update(@Param('id') id: string, @Body() updateExperienceLevelDto: UpdateExperienceLevelDto) {
    return this.experienceLevelsService.update(+id, updateExperienceLevelDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um level pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do level', example: 1 })
  @ApiResponse({ status: 200, description: 'Level removido com sucesso.', })
  @ApiResponse({ status: 404, description: 'Level não encontrado.' })
  remove(@Param('id') id: string) {
    return this.experienceLevelsService.remove(+id);
  }
}
