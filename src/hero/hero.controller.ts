import { Controller, Get } from "@nestjs/common";

@Controller()
export class HeroController {
 @Get('hero/index')
 index() {
    return 'hello index'
 }

 @Get('hero/create')
 create() {
    return 'hello create'
 }
}