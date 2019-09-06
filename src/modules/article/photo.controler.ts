import { Controller, Get, Res, Param, Header, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('photo')
export class PhotoController {
  constructor() { }

  @Get(':id')
  @Header('Content-Type', 'image/jpeg')
  @UseGuards(AuthGuard('jwt'))
  async getPhoto(@Param('id') param: string, @Res() res: Response): Promise<any> {
    return res.sendFile(param, { root: 'images' });
  }
}
