import { Controller, Get, Post, HttpCode, Req, Res, Body } from "@nestjs/common";

let heroes = [
   {
      id: 1,
      name: "desta",
      type: "warrior"
   },
   {
      id: 2,
      name: "diva",
      type: "spell"
   },
];

@Controller('hero')
export class HeroController {
 @Get('index') // this when we try to return value as a object and also return the http response code
 @HttpCode(200)
 index(@Res() response) {
    response.json(heroes);
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
   // return {
   //    data: request.body
   // }
   const { id, name, type } = request.body;
   heroes.push({
      id, name, type
   });
   return heroes;
 }
}