import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';


const routes: Routes = [
  { 
    path : '',
    component : ContainerComponent,
    children : [

      {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
      },
      { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'productos', 
        loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule) 
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
