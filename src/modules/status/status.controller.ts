import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Status } from './entities/status.entity';

@ApiTags('Status') // Agrupa os endpoints no Swagger
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) { }

  @Post()
  @ApiOperation({ summary: 'Cria um novo status' })
  @ApiResponse({ status: 201, description: 'Status criado com sucesso.', type: Status, })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os status' })
  @ApiResponse({ status: 200, description: 'Lista de status retornada com sucesso.', type: [Status], })
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um status pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do status', example: 1 })
  @ApiResponse({ status: 200, description: 'Status retornado com sucesso.', type: Status, })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  findOne(@Param('id') id: number) {
    return this.statusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um status pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do status', example: 1 })
  @ApiResponse({ status: 200, description: 'Status atualizado com sucesso.', type: Status, })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um status pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do status', example: 1 })
  @ApiResponse({ status: 200, description: 'Status removido com sucesso.', })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
