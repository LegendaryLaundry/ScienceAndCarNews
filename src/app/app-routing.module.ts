import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AutomobileComponent } from './automobile/automobile.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'automobile', component: AutomobileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
