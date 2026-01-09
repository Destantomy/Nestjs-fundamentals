import {
  Controller,
  Get,
  Post,
  HttpCode,
  Req,
  Res,
  Body,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';

let heroes = [
  {
    id: 1,
    name: 'desta',
    type: 'warrior',
  },
  {
    id: 2,
    name: 'diva',
    type: 'spell',
  },
];

@Controller('hero')
export class HeroController {
  @Get('index') // this when we try to return value as a object and also return the http response code
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  index(@Res() response) {
    response.json(heroes);
  }

  @Get('create') // this when we try to return value as primitive data, like string
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'desta');
    return 'hello create';
  }

  @Post('store')
  @HttpCode(201) // if data valid then this code will send
  store(
    @Req() request,
    // @Body('name') name: string, // <-- used to show specified data as response, it will return the name
    @Body() CreateHeroDto: CreateHeroDto,
    @Res({ passthrough: true })
    response,
  ) {
    // response.status(201).json({ data: request.body }); // <-- library specific way
    // below are using standard default
    // return {
    //    data: request.body
    // }
    try {
      // const { id, name, type } = request.body;
      // heroes.push({
      //   id,
      //   name,
      //   type,
      // });
      // return name;
      // return heroes;
      return CreateHeroDto;
    } catch (error) {
      response.status(500).json({ message: error }); // error httpCode become 500
    }
  }

  @Get('welcome')
  @Redirect('https://docs.nestjs.com')
  hello() {
    return 'welcome!';
  }

  @Get('detail/:id')
  //  common
  // detail(@Param() params) {
  //    return `hero's ${params.id}`;
  //  }

  //  specified way
  detail(@Param('id') id: number) {
    const hero = heroes.filter((hero) => {
      return hero.id == id;
    });
    //  return hero; // <-- it will return as array object
    return hero[0]; // <-- it will return 1st data found as object
  }
}
