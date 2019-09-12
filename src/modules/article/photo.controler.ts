import { Controller, Get, Res, Param, Header, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

/**
 * Genere le routeur pour acceder aux photos de nos article
 */
@Controller('photo')
export class PhotoController {

  /**
   * Route static de chaque photos du serveur de fichier.
   * @param param
   * @param res
   */
  @Get(':id')
  @Header('Content-Type', 'image/jpeg')
  @UseGuards(AuthGuard('jwt'))
  async getPhoto(@Param('id') param: string, @Res() res: Response): Promise<any> {
    return res.sendFile(param, { root: 'images' });
  }
}
