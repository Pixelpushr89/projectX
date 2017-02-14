import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { GameNavigationComponent } from './game-navigation/game-navigation.component';
import { NodePizzaOverviewComponent } from './game-navigation/node-pizza-overview/node-pizza-overview.component';
import { PizzaEntryComponent } from './game-navigation/node-pizza-overview/pizza-entry/pizza-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOverviewComponent,
    GameNavigationComponent,
    NodePizzaOverviewComponent,
    PizzaEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
