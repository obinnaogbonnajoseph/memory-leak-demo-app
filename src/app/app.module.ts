import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuckyComponent } from './lucky/lucky.component';
import { ReallyComponent } from './really/really.component';
import { Routes, RouterModule } from '@angular/router';
import { LuckyService } from './lucky/lucky.service';

const routes: Routes = [
  { path: '', redirectTo: 'lucky', pathMatch: 'full'},
  { path: 'lucky', component: LuckyComponent, pathMatch: 'full'},
  { path: 'really', component: ReallyComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LuckyComponent,
    ReallyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LuckyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
