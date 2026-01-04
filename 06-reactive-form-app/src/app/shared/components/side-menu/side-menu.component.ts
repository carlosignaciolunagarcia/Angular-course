import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

//interface de cada elemnto de un menu
interface MenuItem{
  title: string;
  route:string;
}

// se recive la lista de las diferentes secciones
const reactiveItems= reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})

export class SideMenuComponent {
  //asignamos la lista a un elemento de ts para poderlo manipular
  reactiveMenu:MenuItem[]=reactiveItems
  .filter((item)=> item.path != '**')
  .map((item)=>({
    route:`reactive/${item.path}`,
    title:`${item.title}`    
  }));

  authMenu: MenuItem[]=[
    {
      title:'Registro',
      route: './auth',
    },
  ];

  countryMenu: MenuItem[]=[
    {
      title:'Paises',
      route: './country',
    },
  ];
}
