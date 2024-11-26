import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Characters') // Agrupa os endpoints no Swagger
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo personagem' })
  @ApiResponse({ status: 201, description: 'Personagem criado com sucesso.', type: Character, })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.charactersService.create(createCharacterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os personagens' })
  @ApiResponse({ status: 200, description: 'Lista de personagens retornada com sucesso.', type: [Character], })
  findAll() {
    return this.charactersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um personagem pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do personagem', example: 1 })
  @ApiResponse({ status: 200, description: 'Personagem retornado com sucesso.', type: Character, })
  @ApiResponse({ status: 404, description: 'Personagem não encontrado.' })
  findOne(@Param('id') id: number) {
    return this.charactersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um personagem pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do personagem', example: 1 })
  @ApiResponse({ status: 200, description: 'Personagem atualizado com sucesso.', type: Character, })
  @ApiResponse({ status: 404, description: 'Personagem não encontrado.' })
  update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.charactersService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um personagem pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do personagem', example: 1 })
  @ApiResponse({ status: 200, description: 'Personagem removido com sucesso.', })
  @ApiResponse({ status: 404, description: 'Personagem não encontrado.' })
  remove(@Param('id') id: number) {
    return this.charactersService.remove(+id);
  }
}
