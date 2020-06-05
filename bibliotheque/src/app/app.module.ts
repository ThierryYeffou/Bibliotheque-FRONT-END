import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateBorrowingComponent } from './components/create-borrowing/create-borrowing.component';
import { CloseBorrowingComponent } from './components/close-borrowing/close-borrowing.component';
import { BorrowingComponent } from './components/borrowing/borrowing.component';
import { ShowOneBorrowingComponent } from './components/show-one-borrowing/show-one-borrowing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    FooterComponent,
    BorrowingComponent,
    CreateBorrowingComponent,
    CloseBorrowingComponent,
    ShowOneBorrowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
