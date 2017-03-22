import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { GameNavigationComponent } from './game-navigation/game-navigation.component';
import { NodePizzaOverviewComponent } from './game-navigation/node-pizza-overview/node-pizza-overview.component';
import { PizzaEntryComponent } from './game-navigation/node-pizza-overview/pizza-entry/pizza-entry.component';
import { EmployeesDetailComponent } from './employees/employees-detail.component';
import { EmployeesListComponent } from './employees/employees-list.component';
import { QuestDetailComponent } from './quest-detail.component';
import { HomeComponent } from './home.component';
import { routing } from "./app.routing";
import { employeesDetailGuard } from './employees/employees-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    GameOverviewComponent,
    GameNavigationComponent,
    NodePizzaOverviewComponent,
    PizzaEntryComponent,
    EmployeesListComponent,
    EmployeesDetailComponent,
    QuestDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [employeesDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
