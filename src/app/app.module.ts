import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { DiceGeneratorComponent } from './dice-generator/dice-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    DiceGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
