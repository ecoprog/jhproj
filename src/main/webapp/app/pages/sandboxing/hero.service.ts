import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    private heroes: Array<Hero> = [
        new Hero(1, 'Pers. 1', 'Description 1', '54654654654560'),
        new Hero(2, 'Pers. 2', 'Description 2', '3434534'),
        new Hero(3, 'Pers. 3', 'Description 3', '887'),
    ];

    getHeroById(id: number ): Hero {
        return this.heroes.find((hero) => hero.id === id);
    }

    getAllHeroes(): Array<Hero> {
        return this.heroes;
    }
}
