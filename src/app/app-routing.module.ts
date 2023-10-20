import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Components/Welcome_page/welcome/welcome.component';
import { AboutComponent } from './Components/About/about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'About', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




