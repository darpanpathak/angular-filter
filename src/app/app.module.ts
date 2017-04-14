import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AppService } from './providers/app-service.service';
import { NameFilter } from './pipes/name-filter.pipe';

import { AppRoutingModule } from './app.routes';
import { NewsdetailsComponent } from './pages/newsdetails/newsdetails.component';
import { SitemenuComponent } from './pages/sitemenu/sitemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NameFilter,
    NewsdetailsComponent,
    SitemenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
