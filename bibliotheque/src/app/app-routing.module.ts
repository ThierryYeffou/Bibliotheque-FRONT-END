import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateBorrowingComponent } from './components/create-borrowing/create-borrowing.component';
import { CloseBorrowingComponent } from './components/close-borrowing/close-borrowing.component';
import { BorrowingComponent } from './components/borrowing/borrowing.component';
import { ShowOneBorrowingComponent } from './components/show-one-borrowing/show-one-borrowing.component';



const routes: Routes = [
    {path:'connexion', component:ConnexionComponent},
    {path:'homepage', component:HomepageComponent},
    {path:'borrowing', component:BorrowingComponent},
    {path:'create-borrowing', component:CreateBorrowingComponent},
    {path:'close-borrowing', component:CloseBorrowingComponent},
    {path:'show-one-borrowing', component:ShowOneBorrowingComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

