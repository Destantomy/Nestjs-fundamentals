import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
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

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }
}
