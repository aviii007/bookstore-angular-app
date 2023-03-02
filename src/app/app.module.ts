import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BooksComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
