import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'generador-personajes';
  public juego: string;
  
  ngOnInit () {
    console.log(this.juego);
    
  }

  elijeJuego (juego) {
    console.log(juego);
    
    this.juego = juego
  }
}
