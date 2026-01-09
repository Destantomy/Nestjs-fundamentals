import { Controller, Get, Post, HttpCode, Req, Res, Body } from "@nestjs/common";

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

 @Post('store')
 store(@Req() request, @Res({ passthrough: true }) response) {
   // response.status(201).json({ data: request.body }); // <-- library specific way
   // below are using standard default
   return {
      data: request.body
   }
 }
}