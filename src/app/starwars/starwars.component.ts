import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as constants from '../utils/constants';

const Personaje = [];

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})

export class StarwarsComponent implements OnInit {

  // TODO: Crear modelo
  public personaje = {
    tasfondo: '',
    oblicacionInicial: '',
    especie: '',
    profesion: '',
    especializaciones: '',
    //
    pExp: [],
    atrDerivados: [],
    motivacionesIniciales:'',
    equipo:'',
    descripcion:'',
    naveInicial:'',
  }

  public paso1 = true;
  public paso2 = true;
  public paso3 = true;
  public paso4 = true;

  public trasfondos: Array<string>;
  public motivaciones: Array<string>;
  public especies: Array<string>;
  public oficios: Array<any>;
  public especializaciones: Array<string>;
  public listaAtributos: Array<string>;
  public resultadoObligacion: String;

  constructor() { 
  }

  ngOnInit() {
    this.listaAtributos = Object.keys(this.personaje);
    this.trasfondos = constants.Trasfondos;
    this.motivaciones = constants.Motivaciones;
    this.especies = constants.Especies;
    this.oficios = constants.Oficios;
    
  }

  setOption(evento){

    Personaje.push({key: evento.name, value: evento.value })
    switch(Personaje.length) {
      case (2) :{
        this.paso1 = false;
        this.paso2 = true;
        
      }
    }
    
    console.log(Personaje);
  }

  setObligacion(valor) {
    let posicionLiteral;
    const obligacion = (parseInt(valor))  
    switch(true) {
      case ( obligacion > 0 && obligacion < 9 ): {
        posicionLiteral = 0;
        break;
      }
      case ( obligacion < 17 ): {
        posicionLiteral = 1;
        break;
      }
      case ( obligacion < 25 ): {
        posicionLiteral = 2;
        break;
      }
      case ( obligacion < 33 ): {
        posicionLiteral = 3;
        break;
      }
      case ( obligacion < 42 ): {
        posicionLiteral = 4;
        break;
      }
      case ( obligacion < 49 ): {
        posicionLiteral = 5;
        break;
      }
      case ( obligacion < 56 ): {
        posicionLiteral = 6;
        break;
      }
      case ( obligacion < 65 ): {
        posicionLiteral = 7;
        break;
      }
      case ( obligacion < 73 ): {
        posicionLiteral = 8;
        break;
      }
      case ( obligacion < 81 ): {
        posicionLiteral = 9;
        break;
      }
      case ( obligacion < 89 ): {
        posicionLiteral = 10;
        break;
      }
      case ( obligacion < 97 ): {
        posicionLiteral = 11;
        break;
      }
    }    
    this.resultadoObligacion = constants.obligaciones[posicionLiteral];        
  }

  changeOficio(evento) {
    this.especializaciones = constants.Oficios.find(ofic => ofic.name === evento.value).espec;
  }
}
