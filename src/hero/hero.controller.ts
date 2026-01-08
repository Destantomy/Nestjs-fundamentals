import { Controller, Get } from "@nestjs/common";

@Controller('hero')
export class HeroController {
 @Get('index')
 index() {
    return 'hello index'
 }

 @Get('create')
 create() {
    return 'hello create'
 }
}