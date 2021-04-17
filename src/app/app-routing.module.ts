import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { GurdService } from './service/gurd.service';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'chart',component:ChartComponent,canActivate:[GurdService]},
{path:'item',component:ItemsComponent},
{path:'signin',component:SigninComponent},
{path:'sigup',component:SignupComponent},
{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
