import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,UiModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7171/api",multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
