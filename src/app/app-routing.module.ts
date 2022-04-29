import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'route1',
    loadChildren: () =>
      import('./route1/route1.module').then((x) => x.Route1Module),
  },
  {
    path: 'route2',
    loadChildren: () =>
      import('./route2/route2.module').then((x) => x.Route2Module),
  },
  {
    path: 'route3',
    loadChildren: () =>
      import('./route3/route3.module').then((x) => x.Route3Module),
  },
  {
    path: 'route4',
    loadChildren: () =>
      import('./route4/route4.module').then((x) => x.Route4Module),
  },
  {
    path: 'route5',
    loadChildren: () =>
      import('./route5/route5.module').then((x) => x.Route5Module),
  },
  {
    path: 'route6',
    loadChildren: () =>
      import('./route6/route6.module').then((x) => x.Route6Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
