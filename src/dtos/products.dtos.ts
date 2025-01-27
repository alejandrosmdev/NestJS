/*import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDto{
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto){
    
}*/

import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
  // Expresiones regulares
  // IsEmail, IsDate
  // rangos, mínimos, máximos

  export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
  
    @IsString()
    @IsNotEmpty()
    readonly description: string;
  
  
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;
  
  
    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;
  
  
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
  }
  
  
  // Instalar dependencia
  // Una forma más efectiva que poner otra vez todos los campos
  // Reutilizar código
  // Extender clases que ya tenemos
  export class UpdateProductDto extends PartialType(CreateProductDto) {}