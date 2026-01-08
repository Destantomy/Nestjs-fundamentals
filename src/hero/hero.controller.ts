import { Controller, Get, HttpCode, Res } from "@nestjs/common";

@Controller('hero')
export class HeroController {
 @Get('index') // this when we try to return value as a object and also return the http response code
 @HttpCode(200)
 index(@Res() response) {
    response.json({
        title: 'hello index'
    });
 }

 @Get('create') // this when we try to return value as primitive data, like string
 create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'desta');
    return 'hello create'
 }
}