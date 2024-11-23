import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Item } from './entities/item.entity';

@ApiTags('Items') // Agrupa os endpoints no Swagger
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo item' })
  @ApiResponse({ status: 201, description: 'Item criado com sucesso.', type: Item, })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os itens' })
  @ApiResponse({ status: 200, description: 'Lista de itens retornada com sucesso.', type: [Item], })
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um item pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do item', example: 1 })
  @ApiResponse({ status: 200, description: 'Item retornado com sucesso.', type: Item, })
  @ApiResponse({ status: 404, description: 'Item não encontrado.' })
  findOne(@Param('id') id: number) {
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um item pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do item', example: 1 })
  @ApiResponse({ status: 200, description: 'Item atualizado com sucesso.', type: Item, })
  @ApiResponse({ status: 404, description: 'Item não encontrado.' })
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um item pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do item', example: 1 })
  @ApiResponse({ status: 200, description: 'Item removido com sucesso.', })
  @ApiResponse({ status: 404, description: 'Item não encontrado.' })
  remove(@Param('id') id: number) {
    return this.itemService.remove(+id);
  }
}
