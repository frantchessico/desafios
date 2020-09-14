import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilepageComponent } from "./pages/me/profilepage/profilepage.component";
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
 {path: '', component: NavbarComponent, children: [
  
  { path: "", component: ProfilepageComponent },
  { path: "**", component: ProfilepageComponent}
 
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
