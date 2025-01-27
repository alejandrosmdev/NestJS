import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { title } from 'process';

@Controller('canciones')
export class CancionesController {

    @Get('todas')
    getCanciones(): string {
        return "La Macarena";
    }

    @Get(':id')
    getCancionesById(@Param('id') id: string){
        return `cancion ${id}`;
    }

    @Get('especifica')
    getCancionesByTitle(
        @Query('title') title: string
    ) {
        return `Cancion: ${title}`;
    }

    @Delete(':id')
    deleteCancionesById(@Param('id') id: string){
        return `Cancion ${id} eliminada`;
    }

    @Put(':id')
    putCancionesById(@Param('id') id: string){
        return `Cancion ${id} editada`;
    }

    @Post(':title/:category')
    postCancionesByTitleCategory(@Param() {title, category}) {
        return `Titulo ${title}, Category ${category}`;
    }
}
