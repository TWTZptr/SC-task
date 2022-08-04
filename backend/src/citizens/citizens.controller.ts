import { Controller, Get } from '@nestjs/common';
import { CitizensService } from './citizens.service';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Get()
  findAll() {
    return this.citizensService.findAll();
  }
}
