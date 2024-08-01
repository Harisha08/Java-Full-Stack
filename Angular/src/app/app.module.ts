import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScomponentComponent } from './scomponent/scomponent.component';
import { HomeComponentHtmlComponent } from './home.component.html/home.component.html.component';
import { ContactComponentHtmlComponent } from './contact.component.html/contact.component.html.component';
import { AboutComponentHtmlComponent } from './about.component.html/about.component.html.component';
import { RouterModule,Routes } from '@angular/router';
import { CalculatorService } from './calculator.service';
import { FactorialService } from './factorial.service';

const ROUTES : Routes = [
  { path : 'home',component : HomeComponentHtmlComponent},
  { path : 'contact',component : ContactComponentHtmlComponent},
  {  path : 'about',component : AboutComponentHtmlComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ScomponentComponent,
    HomeComponentHtmlComponent,
    ContactComponentHtmlComponent,
    AboutComponentHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    CalculatorService,
    FactorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
