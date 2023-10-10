import { Controller, Get, Req, Param, Post } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
enum Color {
  'RED',
}
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(@Req() req: Request): Promise<Cat[]> {
    console.log(req.query);
    return this.catsService.findAll();
  }
  @Get('create')
  async create() {
    this.catsService.create({
      name: 'coco',
      age: 4,
      breed: 'xx',
    });
  }
  @Get('color')
  findColor(): Color {
    return Color.RED;
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
