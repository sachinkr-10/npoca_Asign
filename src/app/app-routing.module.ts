import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrierInfoComponent } from './components/carrier-info/carrier-info.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
     path:'sessions',component:SessionsComponent
  },
  {path:'speakers',component:SpeakersComponent},{
    path:'carrier-info',component:CarrierInfoComponent
  },{
    path:'contact-us',component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
