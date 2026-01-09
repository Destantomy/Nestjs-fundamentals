import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Req,
  Res,
  Body,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  // this constructor is used to accessing data heroes from service
  constructor(private heroService: HeroService) {}

  @Get('index') // this when we try to return value as a object and also return the http response code
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  index(@Res() response) {
    response.json(this.heroService.findAll());
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
      this.heroService.create(CreateHeroDto);
      return this.heroService.findAll();
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
    const hero = this.heroService.findAll().filter((hero) => {
      return hero.id == id;
    });
    //  return hero; // <-- it will return as array object
    return hero[0]; // <-- it will return 1st data found as object
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() updateHeroDto: UpdateHeroDto) {
    this.heroService.findAll().filter((hero) => {
      if (hero.id == id) {
        if (updateHeroDto.name != undefined) {
          hero.name = updateHeroDto.name;
        }
        if (updateHeroDto.type != undefined) {
          hero.type = updateHeroDto.type;
        }
      }
    });
    return this.heroService.findAll();
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    const hero = this.heroService.findAll().filter((hero) => {
      return hero.id != id;
    });
    return hero;
  }
}
