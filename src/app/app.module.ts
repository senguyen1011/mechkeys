import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MechListComponent } from './mech-list/mech-list.component';
import { MechDetailComponent } from './mech-detail/mech-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MechSearchComponent } from './mech-search/mech-search.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    MechListComponent,
    MechDetailComponent,
    NavbarComponent,
    MechSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
