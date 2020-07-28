import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-dice-generator',
  templateUrl: './dice-generator.component.html',
  styleUrls: ['./dice-generator.component.scss']
})


export class DiceGeneratorComponent implements OnInit {

  public reservaDados = {
    capacidad: {nombre: 'capacidad', cantidad:0, valor: 8, resultado: []},
    pericia: { nombre: 'pericia', cantidad:0, valor: 12, resultado: []},
    beneficio:{ nombre: 'beneficio', cantidad:0, valor: 6, resultado: []},
    dificultad: { nombre: 'dificultad', cantidad:0, valor: 8, resultado: []},
    desafio: { nombre: 'desafio', cantidad:0, valor: 12, resultado: []},
    complicaciones:{ nombre: 'complicaciones', cantidad:0, valor: 6, resultado: []},
  };

  public resultado: Array<any>;
  public muestraResultados: boolean;

  constructor() { }

  ngOnInit() {
  }

  lanzaTirada() {
    _.forEach(this.reservaDados, dado => this.lanzaDado(dado));
    this.formaResultado();

    this.muestraResultados = true;
  }

  lanzaDado(dado) {
    for(let i = 0; i < dado.cantidad; i++){
      dado.resultado.push(this.generaAleatorio(dado.valor))
    }
  }


  generaAleatorio(valorMaximo: number): number {
    return Math.floor(Math.random() * valorMaximo);
  }

  formaResultado() {
    const cosa = _.mapValue(this.reservaDados, dado => {return (dado.nombre, dado.resultado) });
    console.log(cosa);

    // _.forEach(this.reservaDados, dados => {if(dados.resultado){

    // }})

  }
}
