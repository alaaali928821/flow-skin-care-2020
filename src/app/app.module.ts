import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TopMenuComponent } from './main-view/top-menu/top-menu.component';
import { PicCardComponent } from './main-view/pic-card/pic-card.component';
import { TextLeftSideComponent } from './main-view/text-left-side/text-left-side.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TopMenuComponent,
    PicCardComponent,
    TextLeftSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
