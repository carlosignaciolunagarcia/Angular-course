import { Component } from '@angular/core';
import { GifsSideMenuOption } from './gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHeader } from './gifs-side-menu-header/gifs-side-menu-header.component';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeader,GifsSideMenuOption],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenu { }
