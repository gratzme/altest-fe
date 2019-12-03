import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UrlsComponent } from './urls/urls.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { LongUrlComponent } from './long-url/long-url.component';

export const appRoutes: Routes = [
  { path: 'q/:code', component: LongUrlComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UrlsComponent,
    LongUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
