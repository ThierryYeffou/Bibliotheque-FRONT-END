import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BorrowingComponent } from './components/borrowing/borrowing.component';



const routes: Routes = [
  {path:'connexion', component:ConnexionComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'borrowing', component: BorrowingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

