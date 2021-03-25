import { Controller, Get, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';

@ApiTags('Clientes')
@ApiBearerAuth()
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  
  @ApiOperation({summary: 'API que retorna lista de clientes'})
  @Get()
  findAll(@Headers() her: any) {
    return this.clientService.findAll(her);
  }
}
