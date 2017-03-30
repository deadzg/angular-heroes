import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HEROES} from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title of Heroes';
  //heroes:Hero[]=[{id:1,name:'Windstorm'},{id:2, name:'FireFighter'}];
heroes:Hero[]=HEROES;
  hero :Hero={
    id:1,
    name:'Windstorm'
  } ;
  selectedHero:Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
